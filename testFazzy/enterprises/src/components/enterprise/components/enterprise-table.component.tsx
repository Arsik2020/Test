import {DataGrid, GridActionsCellItem, GridCallbackDetails, GridColDef, GridRowParams, GridToolbarContainer, MuiEvent} from "@mui/x-data-grid";
import {useEffect, useState} from "react";
import {EnterpriseAPI} from "../api/enterprise.api";
import {EnterpriseFullRequestDto} from "../dto/enterprise-full-request.dto";
import {EnterpriseFullResponseDto} from "../dto/enterprise-full-response.dto";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {Button, createTheme, ThemeProvider, Typography} from "@mui/material";
import {ruRU} from '@mui/x-data-grid/locales';
import AddIcon from '@mui/icons-material/Add';

export interface EnterpriseTestTableProps {
    needUpdate: boolean;
    renderEditForm: (params: EnterpriseFullRequestDto) => any;
    renderAddForm: () => any;
    renderDeleteForm: (id: EnterpriseFullRequestDto) => any;
    onRowClick: (row: EnterpriseFullRequestDto) => any;
}

const EnterpriseTableTestComponent: React.FC<EnterpriseTestTableProps> = (props) => {

    const [rows, setRows] = useState<EnterpriseFullResponseDto[] | undefined>(undefined);

    const getDataRows = async () => {
        const rows = await new EnterpriseAPI().getAllEnterprise() || [];
        setRows(rows);
    }

    useEffect(() => {
        getDataRows();
    }, [props.needUpdate]);

    function renderToolbar() {
        return (
            <GridToolbarContainer>
                <Button
                    style={{
                        width: '20em',
                        height: '2em',
                        marginBottom: '10px',
                        marginTop: '10px'
                    }}
                    color="primary"
                    variant="contained"
                    onClick={props.renderAddForm}
                    startIcon={<AddIcon />}
                >
                    Добавить
                </Button>
            </GridToolbarContainer>);
    }

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Предприятие',
            sortable: false,
            resizable: false,
            filterable: false,
            pinnable: false,
            flex: 1,
            renderCell: ({id, row}) => {
                return (
                    <div>
                        <Typography
                            style={{
                                fontWeight: 600
                            }}>
                            {row.name}
                            <Typography
                                style={{
                                    fontSize: 11
                                }}
                                color="textSecondary">
                                Количество сотрудников - {row.count}
                            </Typography>
                        </Typography>
                    </div>
                )
            },
        },
        {
            field: 'action',
            headerName: 'Действия',
            sortable: false,
            type: 'actions',
            resizable: false,
            flex: 0,
            align: 'center',

            getActions: ({id, row}) => {
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
    const openFullDescr = (
        params: GridRowParams,
        event: MuiEvent<React.MouseEvent>,
        details: GridCallbackDetails
    ) => {

        props.onRowClick(params.row);
    }
    const theme = createTheme(
        {
            palette: {
                primary: {main: '#1976d2'},
            },
        },
        ruRU,
    );
    const paginationModel = {page: 0, pageSize: 5};

    return (
        <ThemeProvider theme={theme}>

            <DataGrid
                getRowId={(row: EnterpriseFullResponseDto) => {
                    return row.id || '';
                }}
                style={{width: '22em'}}
                columns={columns}
                onRowClick={openFullDescr}
                rows={rows}
                rowSelection={false}
                slots={{toolbar: renderToolbar}}
                initialState={{pagination: {paginationModel}}}
                pageSizeOptions={[]}
                pagination

            />
        </ThemeProvider>
    );
}
export const EnterpriseTable = EnterpriseTableTestComponent;
