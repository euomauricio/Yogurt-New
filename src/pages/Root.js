import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import PagesHome from './Home/Home'
import '../App.css';


export default function Root() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagesHome />} />
      </Routes>
    </BrowserRouter>

  )
}