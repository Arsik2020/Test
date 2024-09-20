import {TextField} from "@mui/material";
import React from "react";
import {FormTemplate} from "../../common/form/form-template.cmoponent";
import {useObjectState} from "../../common/hooks/use-object-state.hooks";
import {ErrorMessageText} from "../../common/message-text/error-message.component";
import {EnterpriseAPI} from "../api/enterprise.api";
import {EnterpriseFullRequestDto} from "../dto/enterprise-full-request.dto";

export interface EnterpriseFormProps {
    open: boolean;
    onClose: () => void;
    data?: EnterpriseFullRequestDto;
    isEditable?: boolean;
}

const EnterpriseFromComponent: React.FC<EnterpriseFormProps> = (props) => {

    const [data, setDataByField, setData] = useObjectState<EnterpriseFullRequestDto>(props.data ||
        {
            id: '',
            name: ''
        } as EnterpriseFullRequestDto);

    const [errorMessage, setErrorMessage] = React.useState<React.ReactNode>(undefined);

    const handInputElement = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDataByField(event.target.name, event.target.value);
    }

    const onClickHandle = async () => {

        console.log('id = ' + data.name);
        if (data.name.trim().length > 0) {
            const enterpriseData = await new EnterpriseAPI().processingEnterprise(data);
            if (enterpriseData?.id) {
                props.onClose && props.onClose();
            } else {
                setErrorMessage(<ErrorMessageText message={'Произошла ошибка попробуйте ещё раз'} />);
            }
        } else {
            setErrorMessage(<ErrorMessageText message={'Поле не может быть пустым'} />);
        }
    }


    const renderComponents = (): React.ReactNode[] => {
        return [
            <div>
                <TextField
                    onChange={handInputElement}
                    name='name'
                    label='Имя'
                    variant='outlined'
                    value={data.name}
                    size={'small'}
                    required={true}
                    key={data.id}
                    inputProps={
                        {
                            maxLength: 64
                        }
                    }
                    style={{marginTop: '10px', width: '20em'}}
                />
                <div style={{height: '30px'}}>{errorMessage}</div>
            </div>
        ];
    }
    let title = '';
    let buttonText = '';
    if (props.isEditable) {
        title = 'Обновление предприятия';
        buttonText = 'Обновить';
    } else {
        title = 'Добавление нового предприятия';
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
            windowHeight={'90px'}
        />
    );
}
export const EnterprisesForm = EnterpriseFromComponent;