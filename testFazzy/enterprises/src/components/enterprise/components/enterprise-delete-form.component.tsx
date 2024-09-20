import React from "react";
import {EnterpriseAPI} from "../api/enterprise.api";
import {Typography} from "@mui/material";
import {FormTemplate} from "../../common/form/form-template.cmoponent";
import {EnterpriseFullRequestDto} from "../dto/enterprise-full-request.dto";

export interface DeleteEnterpriseFormProps {
    open: boolean;
    onClose: () => void;
    data: EnterpriseFullRequestDto;
}

const DeleteEnterpriseFormCompoennt: React.FC<DeleteEnterpriseFormProps> = (props) => {

    const onClickHandle = async () => {
        await new EnterpriseAPI().deleteEnterprise(props.data);
        props.onClose && props.onClose();
    }

    const renderComponents = (): React.ReactNode[] => {
        return [
            <div>
                <Typography style={{fontWeight: 600}}>
                    Вы уверены, что хотите удалить предприятие ?
                </Typography>
            </div>
        ];
    }
    
    return (
        <FormTemplate
            title={"Удаление пердприятия"}
            components={renderComponents()}
            okAction={onClickHandle}
            cancelAction={props.onClose}
            buttonText={"Удалить"}
            open={props.open}
            width={"100%"}
            height={"100%"} />
    );
}

export const EnterpriseDeleteDialog = DeleteEnterpriseFormCompoennt;