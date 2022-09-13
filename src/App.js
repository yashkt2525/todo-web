import { Fragment, useEffect, useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Todos } from "./components/Todos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const addTodo = (title, desc) => {
    console.log("i am adding this todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
    
  };

  // const [todos , setTodos] = useState([]);

  const onDelete = (todo) => {
    console.log("i am on delete of todo", todo);
    // let index= todos.indexOf(todo);
    // todos.splice(index,1);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
        // localStorage.getItem("todos");
      })
    );
  };
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="MyTodosList" SearchBar={false} />
        <Routes>
          <Route
            exact path="/" element={<><AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} /></>}
          
          />

          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
