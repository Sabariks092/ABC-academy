import React from 'react'
import "bootstrap/dist/js/bootstrap.min.js";
import "../Components/Navbar.css"

export const Navbar = () => {
    return (
        <div>
            <nav style={{backgroundColor:"rgb(255,99,231)",width:"100%"}}className="navbar d-flex align-items-center navbar-expand-lg pb-2 text-white">
                <div className="container-fluid ">
                    <a className="navbar-brand text-white" href="#">ABC Academy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto text-white me-5 mb-2 mb-lg-0">
                            <li className="nav-item text-white">
                                <a className="nav-link text-white active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white active" aria-current="page" href="#">Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white active" aria-current="page" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white active" aria-current="page" href="#">About Us</a>
                            </li>
            
                        </ul>
                        <form className="d-flex" role="search">
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}
