export interface ErrorMessageProps {
    message: string;
}
const ErrorMessageTextComponent: React.FC<ErrorMessageProps> = (props) => {

    return (
        <div style={{paddingBottom: '10px', color: 'red'}}>
            <span>
                {props.message}
            </span>
        </div>



    );

}
export const ErrorMessageText = ErrorMessageTextComponent



