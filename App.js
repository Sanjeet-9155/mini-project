import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FlipCart from './flipcart';
import SignUp from './signup';
import TodoList from './todolist/todolist';
import Api from './api';
import Count from './counter/counter';
import SmartGrader from './grader/smartgrader';
import Timer from './timer/timer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './home';
// import TodoNow from './todolist/todonow';
// import TodoList from './todo/todo';

// let name = 'sanjeet kumar'

function App() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      {/* <SignUp /> */}
      {/* <FlipCart /> */}
      {/* {<TodoList/>} */}
      {/* {<TodoList/>} */}
      {/* {<TodoNow/>} */}
      {/* <Api name={name}/> */}
      {/* <Count/> */}
      {/* <SmartGrader/> */}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="home" element={<Home />}/>
          <Route exact path="todolist" element={<TodoList />}/>
          <Route exact path="counetr" element={<Count />}/>
        </Routes>
      </BrowserRouter>
   
    </div>


  );
}



export default App;
