import {Button, Dialog, DialogActions, DialogContent, DialogTitle} from "@mui/material"
import React from "react"



export interface FormTemplateProps {
    title: string,
    components: React.ReactNode[],
    okAction: () => any,
    cancelAction: () => any,
    open: boolean,
    width: string | number;
    height: string | number;
    buttonText?: string;
    windowWidth?: string;
    windowHeight?: string
}
const FormTemplateComponent: React.FC<FormTemplateProps> = (props) => {

    return (
        <div style={{
            width: props.windowWidth,
            height: props.windowHeight
        }}>
            <Dialog
                style={{
                    width: props.width,
                    height: props.height,
                    position: "absolute",
                    top: '50%',
                    left: '50%',
                    transform: "translate(-50%, -50%)"
                }}
                open={props.open}
                onClose={props.cancelAction}
                fullWidth={true}
                PaperProps={{style: {maxWidth: props.windowWidth}}}>

                <DialogTitle>{props.title}</DialogTitle>
                <DialogContent style={{
                    display: 'block',
                    alignContent: 'auto',
                    width: props.windowWidth,
                    height: props.windowHeight
                }}>
                    {props.components.map(component => component)}
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.okAction}>
                        {props.buttonText}
                    </Button>
                    <Button onClick={props.cancelAction}>
                        Закрыть
                    </Button>
                </DialogActions>
            </Dialog>

        </div>
    );
}
export const FormTemplate = FormTemplateComponent

