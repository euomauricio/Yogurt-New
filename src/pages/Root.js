import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import PagesHome from './Home/Home';
import Login from './Login/Login';
import Reset from './Login/ResetPassword';
import Register from './Login/Register';
import '../App.css';


export default function Root() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagesHome />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ResetPassword" element={<Reset />} />
        <Route path="/Register" element={<Register />} />

      </Routes>
    </BrowserRouter>

  )
}