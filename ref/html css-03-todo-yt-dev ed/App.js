import './App.css';
import React, {useState, useEffect} from "react";
import Form from "./components/Form.js";
import ToDoList from "./components/ToDoList.js";

function App() {

  // states
  const [inputText,
    setInputText] = useState("");
  const [todos,
    setTodos] = useState([]);
  const [status,
    setStatus] = useState("all");
  const [filteredTodos,
    setFilteredTodos] = useState([]);

  // effects run once
  useEffect(
    () => {
      loadLocalTodos();
    }, []
  );

  // effects
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);



  // functions
  function filterHandler() {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  }

  function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  function loadLocalTodos() {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else{
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
      }
    }

  // jsx
  return (
    <div className="App">
      <header>
        <h1>Ed's Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus} />
      <ToDoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
