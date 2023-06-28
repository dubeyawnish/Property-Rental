import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="App">


            <nav className="  navbar navbar-expand-lg bg-body-tertiary shadow p-3  bg-body-tertiary rounded">
                <div className="container mt-2">
                    <a className="navbar-brand me-5 " href="#"> <img src='https://www.dharnigroup.com/wp-content/uploads/2021/10/cropped-Logo-on-for-Dilwai-27-Oct-2019-1-1.jpg' /></a>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className=" ms-5 nav-link " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Rent by Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Rent by Location</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Buy by Project</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Buy by Location</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Search by Type</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">List by Property</a>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;