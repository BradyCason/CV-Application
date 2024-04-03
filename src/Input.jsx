import Form from "./Form";

function Input({onAddInput}){
    return(
        <div className="input-container">
            <Form onAddInput={onAddInput} />
        </div>
    )
}

export default Input;