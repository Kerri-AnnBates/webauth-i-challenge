import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

//components
import Header from './components/header/Header';
import Home from './components/Home';
import Login from './components/auths/Login';
import Register from './components/auths/Register';
import UserList from './components/users/UserList';

function App() {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/users' component={UserList} />
    </>
  );
}

export default App;
