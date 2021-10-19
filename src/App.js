import './App.css';
import { useState } from 'react';
import Todo from './Components/Todo';
import FormTodo from './Components/FormTodo';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sample todo",
      isDone: false ,
      isFavorite : false 
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const markTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const favorite = index => {
    const newTodos = [...todos];
    newTodos[index].isFavorite = true;
    setTodos(newTodos);
  }


  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <FormTodo addTodo={addTodo} />
      <div>
          {todos.map((todo, index) => (
            <Todo 
                key={index}
                index={index}
                todo={todo}
                markTodo={markTodo}
                removeTodo={removeTodo}
                favorite = {favorite}
                />
          ))}
        </div>
    </div>
  );
}

export default App;
