import {useEffect, useState} from "react";
import {EmployeeAPI} from "../api/employee.api";
import {EmployeeFullRequestDto} from "../dto/employee-full-request.dto";
import {EmployeeFullResponseDto} from "../dto/employee-full-response.dto";
import {DataGrid, GridActionsCellItem, GridColDef, GridLocaleText} from '@mui/x-data-grid';
import {Button, createTheme, InputAdornment, Paper, TextField, ThemeProvider, Toolbar, Typography} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import * as XLSX from 'xlsx';
import {EnterpriseFullRequestDto} from "../../enterprise/dto/enterprise-full-request.dto";
import {ruRU} from "@mui/material/locale";


export interface EmployeeTableProps {
    needUpdate: boolean;
    renderEditForm: (params: EmployeeFullRequestDto) => any;
    renderAddForm: () => any;
    renderDeleteForm: (id: EmployeeFullRequestDto) => any;
    entId: EnterpriseFullRequestDto;
}

const EmployeeTableComponent: React.FC<EmployeeTableProps> = (props) => {

    const [rows, setRows] = useState<EmployeeFullResponseDto[] | undefined>();
    const paginationModel = {page: 0, pageSize: 5};
    const [search, setSearch] = useState<string>('');


    const renderEmployeeTable = async () => {
        const data = await new EmployeeAPI()
            .getAllEmployeeById(
                props.entId
            );
        setRows(data);
    }

    useEffect(() => {
        if (props.entId.id.length > 0) {
            renderEmployeeTable();
        }
    }, [props.needUpdate]);

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Имя',
            flex: 1,
            align: 'left',
            resizable: false

        },
        {
            field: 'surname',
            headerName: 'Фамилия',
            flex: 1,
            align: 'left',
            resizable: false
        },
        {
            field: 'lastname',
            headerName: 'Отчество',
            flex: 1,
            align: 'left',
            resizable: false

        },
        {
            field: 'post',
            headerName: 'Должность',
            flex: 1,
            align: 'left',
            resizable: false

        },
        {
            field: 'action',
            headerName: 'Действия',
            sortable: false,
            type: 'actions',
            align: 'center',
            resizable: false,
            flex: 0,

            getActions: ({row}) => {
                return [
                    < GridActionsCellItem
                        label='edit'
                        icon={<EditIcon />}
                        color={'primary'}
                        onClick={() => {props.renderEditForm(row)}}
                    />,
                    <GridActionsCellItem
                        label='Delete'
                        icon={<DeleteIcon />}
                        color={'primary'}
                        onClick={() => {props.renderDeleteForm(row)}}
                    />
                ]
            }
        }
    ];

    const handInsertElement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    const filteredRows = rows?.filter((item) => {
        if (search.length > 0) {
            const fullData = (
                item.name + ' '
                + item.surname + ' '
                + item.lastname + ' '
                + item.post).toLowerCase();
            if (fullData.includes(search.toLowerCase())) {
                return item;
            }
        } else {
            return rows;
        }

    });
    function renderToolbar() {
        return (
            <Toolbar style={{
                justifyContent: 'space-between'
            }}>

                <Button
                    style={{
                        width: '15em',
                        marginBottom: '10px',
                        marginTop: '10px'
                    }}
                    color="primary"
                    variant="contained"
                    size={'small'}
                    onClick={props.renderAddForm}
                    startIcon={<AddIcon />}
                >
                    Добавить
                </Button>

                <TextField
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment
                                    position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                    variant={'outlined'}
                    size={'small'}
                    value={search}
                    style={{
                        marginLeft: '10px',
                        marginRight: '10px'
                    }}
                    onChange={handInsertElement}
                />

                <Button
                    style={{
                        width: '15em',
                        marginBottom: '10px',
                        marginTop: '10px'
                    }}
                    color="primary"
                    variant="contained"
                    size={'small'}
                    onClick={exportToExcel}
                >
                    Сформировать отчёт
                </Button>
            </Toolbar>
        );
    }
    const exportToExcel = () => {
        if (rows) {
            const worksheet = XLSX.utils.json_to_sheet(rows);
            const workbook = XLSX.utils.book_new();

            XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
            XLSX.writeFile(workbook, 'employees_report.xlsx');
        }

    };
   
    return (

        <Paper style={{width: '75vw'}}>
            <div style={{marginLeft: '10px'}}>
                <Typography style={{fontWeight: 600}}>
                    Cотрудники пердприятия: {props.entId.name}
                </Typography>
            </div>
            {renderToolbar()}


            <DataGrid
                getRowId={(row: EmployeeFullResponseDto) => {
                    return row.id || '';
                }}
                columns={columns}
                localeText={{
                    noRowsLabel: 'Данные по выбранному преприятию отсутвуют',
                }}
                rowSelection={false}
                rows={filteredRows}

                initialState={{
                    pagination: {
                        paginationModel
                    }
                }}
                pageSizeOptions={[]}

            />
        </Paper >
    );
}
export const EmployeeTable = EmployeeTableComponent;