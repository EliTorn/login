
function Success (props){
    return (
        <div style={{color: "blue"}}>
            <div>
                Success: true
            </div>
            <div>
                Error code: {props.errorCode}
            </div>
            <div>
                Explain: {props.explain}
            </div>
        </div>

    )
}
export default Success;