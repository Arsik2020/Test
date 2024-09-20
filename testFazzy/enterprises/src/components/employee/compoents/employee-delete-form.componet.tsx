import {Typography} from "@mui/material";
import React from "react";
import {FormTemplate} from "../../common/form/form-template.cmoponent";
import {EmployeeAPI} from "../api/employee.api";
import {EmployeeFullRequestDto} from "../dto/employee-full-request.dto";

export interface EmployeeDeleteFormProps {
    open: boolean;
    onClose: () => void;
    data: EmployeeFullRequestDto;
}

const EmployeeDeleteFormComponent: React.FC<EmployeeDeleteFormProps> = (props) => {
    const [open, setOpen] = React.useState<boolean>(false);

    const onClickHandle = async () => {
        const enterpriseData = await new EmployeeAPI().deleteEmployee(props.data);

        if (enterpriseData?.deleteDate) {
            props.onClose && props.onClose();
        }
           
    }

    const renderComponents = (): React.ReactNode[] => {
        return [
            <div>
                <Typography style={{fontWeight: 600}}>
                    Вы уверены, что хотите удалить сотрудника ?
                </Typography>
            </div>
        ];
    }
    return (
        <FormTemplate
            title={"Удаление сотруднника"}
            components={renderComponents()}
            okAction={onClickHandle}
            cancelAction={props.onClose}
            buttonText={"Удалить"}
            open={props.open} width={"100%"} height={"100%"} />
    );
}
export const EmployeeDeleteDialog = EmployeeDeleteFormComponent;