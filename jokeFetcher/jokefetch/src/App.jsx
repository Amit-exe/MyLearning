import React from "react";
import JokeFetcher from "./pages/JokeFetcher";
import Login from "./pages/Login";
import TodoList from "./pages/TodoList";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/joke" element={<JokeFetcher />}></Route>
        <Route path="/todo" element={<TodoList />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <JokeFetcher /> */}
      {/* <Login /> */}
      {/* <TodoList /> */}
    </div>
  );
}

export default App;
