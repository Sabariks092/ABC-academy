import React from 'react'
import "bootstrap/dist/js/bootstrap.min.js";
import "../Components/navbar.css"

export const Navbar = () => {
    return (
        <div>
            <nav style={{backgroundColor:"black",width:"100%",boxShadow:"2px 2px 8px black",position:"fixed"}}className="navbar pt-3 d-flex align-items-center navbar-expand-lg pb-2 text-white">
                <div className="container-fluid ">
                    <a className="navbar-brand pb-2 ms-5" href='#' style={{color:"white",fontSize:"25px"}}><strong>ABC Academy</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div style={{color:""}} className="collapse pb-2 navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto gap-3 text-white me-5 mb-2 mb-lg-0">
                            <li className="nav-item text-white">
                                <a className="nav-link active" aria-current="page" style={{color:"rgb(255,99,231)"}} >HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href='#courses' style={{color:"rgb(255,99,231)"}}  >COURSES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#services" style={{color:"rgb(255,99,231)"}}>SERVICES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#contact" style={{color:"rgb(255,99,231)"}}>ABOUT US</a>
                            </li>
            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
