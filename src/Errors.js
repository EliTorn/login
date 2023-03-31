
function Errors(props){
    let massage = "";
    switch (props.errorCode){
        case 1:
            massage = "Username is required!!";
            break;
        case 2:
            massage = "Password is required!!";
            break;
        case 3:
            massage = "Password don't match";
            break;
        case 4:
            massage = "Username is taken";
            break;
        case 5:
            massage = "ERROR_LOGIN";
            break;

    }
    return (
        <div style={{color: "red"}}>
            There was a Error: {massage}
        </div>
    )
}
export default Errors;