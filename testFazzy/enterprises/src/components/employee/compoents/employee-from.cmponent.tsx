import {Grid, TextField} from "@mui/material";
import React from "react";
import {FormTemplate} from "../../common/form/form-template.cmoponent";
import {useObjectState} from "../../common/hooks/use-object-state.hooks";
import {ErrorMessageText} from "../../common/message-text/error-message.component";
import {EmployeeAPI} from "../api/employee.api";
import {EmployeeFullRequestDto} from "../dto/employee-full-request.dto";

export interface EmployeeFormProps {
    open: boolean;
    onClose: () => void;
    data?: EmployeeFullRequestDto;
    isEditable?: boolean;
}

const EmployeeFormComponent: React.FC<EmployeeFormProps> = (props) => {

    const [data, setDataByField, setData] = useObjectState<EmployeeFullRequestDto>(props.data ||
        {
            id: '',
            name: '',
            surname: '',
            lastname: '',
            post: '',
            enterpriceId: {
                id: '',
                name: ''
            }
        } as EmployeeFullRequestDto);

    const [errorMessage, setErrorMessage] = React.useState<React.ReactNode>(undefined);

    const handInputElement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataByField(event.target.name, event.target.value);
    }
    function checkEmpty(str: string) {
        return str.trim().length > 0;
    }
    const onClickHandle = async () => {
        console.log('id = ' + data.name);
        if (
            checkEmpty(data?.name || '') &&
            checkEmpty(data?.lastname || '') &&
            checkEmpty(data?.surname || '')
        ) {
            const enterpriseData = await new EmployeeAPI().processingEnterprise(data);

            if (enterpriseData?.id) {
                props.onClose && props.onClose();
            }

        } else {
            setErrorMessage(
                <ErrorMessageText
                    message={'Поля имени, фамилии и отчества должны быть заполенными'} />);
        }
    }

    const renderComponents = (): React.ReactNode[] => {
        return [
            <div>
                <Grid
                    container
                    rowSpacing={2}
                    columnSpacing={{xs: 1, sm: 1, md: 1}}
                    sx={{
                        paddingBottom: '20px',
                    }} >

                    <Grid
                        item
                        xs={8}
                        style={{
                            paddingTop: '30px',
                            maxWidth: 'max-content'
                        }}>
                        <TextField
                            onChange={handInputElement}
                            name='name'
                            label='Имя'
                            variant='outlined'
                            value={data.name}
                            size={'small'}
                            key={data.id}
                            inputProps={
                                {
                                    maxLength: 32
                                }
                            }
                            style={{width: '20em'}}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        style={{
                            paddingTop: '30px',
                            maxWidth: 'max-content'
                        }}>
                        <TextField
                            onChange={handInputElement}
                            name='surname'
                            label='Фамилия'
                            variant='outlined'
                            value={data.surname}
                            size={'small'}
                            inputProps={
                                {
                                    maxLength: 32
                                }
                            }
                            style={{width: '20em'}}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={4}
                        style={{
                            paddingTop: '30px',
                            maxWidth: 'max-content'
                        }}>
                        <TextField
                            onChange={handInputElement}
                            name='lastname'
                            label='Отчество'
                            variant='outlined'
                            value={data.lastname}
                            inputProps={
                                {
                                    maxLength: 32
                                }
                            }
                            size={'small'}
                            style={{width: '20em'}}
                        />
                    </Grid>
                    <Grid
                        item
                        xs={8}
                        style={{
                            paddingTop: '30px',
                            maxWidth: 'max-content'
                        }}>
                        <TextField
                            onChange={handInputElement}
                            name='post'
                            label='Должность'
                            variant='outlined'
                            inputProps={
                                {
                                    maxLength: 32
                                }
                            }
                            value={data.post}
                            size={'small'}
                            style={{width: '20em'}}
                        />
                    </Grid>
                </Grid>
                <div
                    style={{
                        height: '30px'
                    }}>
                    {errorMessage}
                </div>
            </div>
        ];
    }

    let title = '';
    let buttonText = '';

    if (props.isEditable) {
        title = 'Обновление информации о сотруднике';
        buttonText = 'Обновить';
    } else {
        title = 'Добавление нового сотрудника';
        buttonText = 'Добавить';
    }

    return (
        <FormTemplate
            title={title}
            components={renderComponents()}
            okAction={onClickHandle}
            cancelAction={props.onClose}
            open={props.open}
            width={"100%"}
            height={"100%"}
            buttonText={buttonText}
            windowWidth={"auto"}
            windowHeight={"auto"}

        />
    );
}

export const EmployeeForm = EmployeeFormComponent;
