import React, { useState } from 'react'

function TodoList() {
    const [todos, setTodos] = useState({
        text: "This is a sample todo",
        isDone: false
    })
    const handleClick = (e) => {
        e.preventDefault()
        alert(`HELLO ${todos.text}`)
        console.log(todos)
    }
    return (
        <div>
            <form onSubmit={handleClick}>
                <input
                    type="text"
                    placeholder="ADD A TASK"
                    value={todos.text}
                    onChange={e => setTodos(e.target.value)}
                />
                <button type="submit">SUBMIT</button>

                {/* {
                    tasks.map( (task , index) => {
                        <ul>
                            <li key={index}> {task}</li>
                        </ul>
                    })
                } */}
            </form>

        </div>
    )
}

export default TodoList
