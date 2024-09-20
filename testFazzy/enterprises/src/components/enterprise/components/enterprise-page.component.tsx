import {EnterpriseFullRequestDto} from "../dto/enterprise-full-request.dto";
import React from "react";
import {EnterprisesForm} from "./entreprise-form.component";
import {EnterpriseTable} from "./enterprise-table.component";
import {EnterpriseDeleteDialog} from "./enterprise-delete-form.component";
import {EmployeeTable} from "../../employee/compoents/employee-table.component";
import {EmployeeFullRequestDto} from "../../employee/dto/employee-full-request.dto";
import {EmployeeFullResponseDto} from "../../employee/dto/employee-full-response.dto";
import {EmployeeForm} from "../../employee/compoents/employee-from.cmponent";
import {EmployeeDeleteDialog} from "../../employee/compoents/employee-delete-form.componet";
import {Grid, Paper} from "@mui/material";

export interface EnterprisePageProps {

}

const EnterprisePageComponent: React.FC<EnterprisePageProps> = (props) => {

    const [dialogEntrprise, setDialogEnterprise] = React.useState<React.ReactNode>(undefined);
    const [updateEnterprise, setUpdateEnterprice] = React.useState<boolean>(false);

    const [dialogEmployee, setDialogEmployee] = React.useState<React.ReactNode>(undefined);
    const [updateEmployee, setUpdateEmployee] = React.useState<boolean>(false);

    const [entId, setEntId] = React.useState<EnterpriseFullRequestDto>({id: '', name: ''});

    const onCloseDialogEnterprise = () => {
        setDialogEnterprise(undefined);
        setUpdateEnterprice(!updateEnterprise);
    }

    const onCloseEmployee = () => {
        setDialogEmployee(undefined);
        setUpdateEmployee(!updateEmployee);
        setUpdateEnterprice(!updateEnterprise);
    }

    const renderEditEnterpriseForm = (params: EnterpriseFullRequestDto) => {
        setDialogEnterprise(
            <EnterprisesForm
                open={true}
                onClose={onCloseDialogEnterprise}
                data={params}
                isEditable={true} />);
    }
    const renderEditEmployee = (params: EmployeeFullRequestDto) => {
        params.enterpriceId.id = entId?.id;

        setDialogEmployee(
            <EmployeeForm
                open={true}
                onClose={onCloseEmployee}
                data={params}
                isEditable={true} />);
    }

    const renderAddEnterpriseForm = () => {
        setDialogEnterprise(
            <EnterprisesForm
                open={true}
                onClose={onCloseDialogEnterprise}
            />);
    }

    const renderAddEmployee = () => {
        setDialogEmployee(
            <EmployeeForm
                open={true}
                onClose={onCloseEmployee}
                data={{enterpriceId: {id: entId.id}} as EmployeeFullRequestDto}
            />);
    }

    const renderDeleteEnterpriseForm = (id: EnterpriseFullRequestDto) => {

        setDialogEnterprise
            (<EnterpriseDeleteDialog
                open={true}
                onClose={onCloseDialogEnterprise}
                data={id}
            />);

    }
    const renderDeleteEmployeeForm = (params: EmployeeFullRequestDto) => {

        params.enterpriceId.id = entId.id;

        setDialogEmployee(<EmployeeDeleteDialog
            open={true}
            onClose={onCloseEmployee}
            data={params} />);
    }

    const renderEmployeeTable = (id: EnterpriseFullRequestDto) => {
        setUpdateEmployee(!updateEmployee)
        setEntId(id);
    }

    return (
        <Paper>
            <Grid container rowSpacing={2} columnSpacing={{xs: 1, sm: 1, md: 1}} sx={{paddingBottom: '20px'}} >
                <Grid item xs={4} style={{paddingTop: '30px', maxWidth: 'max-content'}}>
                    <EnterpriseTable
                        onRowClick={renderEmployeeTable}
                        needUpdate={updateEnterprise}
                        renderEditForm={renderEditEnterpriseForm}
                        renderAddForm={renderAddEnterpriseForm}
                        renderDeleteForm={renderDeleteEnterpriseForm} />
                </Grid>
                <Grid item xs={4} style={{paddingTop: '30px', maxWidth: 'max-content'}}>
                    {entId.id.length > 0 ?
                        <EmployeeTable
                            entId={entId}
                            needUpdate={updateEmployee}
                            renderEditForm={renderEditEmployee}
                            renderAddForm={renderAddEmployee}
                            renderDeleteForm={renderDeleteEmployeeForm} />
                        :
                        <div></div>}
                </Grid>
                {dialogEntrprise}
                {dialogEmployee}
            </Grid>
        </Paper >
    );
}
export const EnterprisePage = EnterprisePageComponent;

