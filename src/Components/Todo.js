import React from 'react'
import './FormTodo.css' 


function Todo({ todo, index, markTodo, removeTodo, favorite }) {
    return (
      <div className="todo" >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" , 
                       color: !todo.isDone && todo.isFavorite ? "yellow" : "white"
                    }}>
                    {todo.text}
        </span>
        <div>
          <button className="DoneBtn"  onClick={() => markTodo(index)}>Done</button>
          <button className="DelBtn"   onClick={() => removeTodo(index)}>Delete</button>
          <button className="FavBtn"   onClick={() => favorite(index)}>Favorite</button>
          
        </div>
      </div>
    );
}

export default Todo
