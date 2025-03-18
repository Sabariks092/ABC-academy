import { useState } from 'react'
import './App.css'
import { Navbar } from './Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Header } from './Components/Header';
import { Courses } from './Components/Courses';
import { Services } from './Components/Services';
import Feedback from './Components/Feedback';
function App() {

  return (
    <>
     <div>
     <Navbar/>
     <Header/>
     <Services/>
     <Courses/>
  
     <Feedback/>
     </div>
    </>
  )
}

export default App
