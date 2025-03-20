import './App.css'
import { Navbar } from './Components/Navbar'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Header } from './Components/Header';
import { Courses } from './Components/Courses';
import { Services } from './Components/Services';
import Feedback from './Components/Feedback';
import { Testimonials } from './Components/Testimonials';
import { Footer } from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <div>
        <div>
        <Navbar />
        </div>
        <Header />
        <div id="services">
          <Services />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id='feedbacks'>
        <Testimonials />
        </div>
        <div id='contact'>
        <Feedback />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
