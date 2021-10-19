import { useState } from "react";
import './FormTodo.css' 

function FormTodo({ addTodo }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
        //    value ? (addTodo(value) , setValue("")) : alert("addd")
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Add Todo</label>
            <input size ="50" type="text" value={value} onChange={e => setValue(e.target.value)} />
            <button className="subBtn" type="submit">Submit</button>
        </form>
    );
}

export default FormTodo