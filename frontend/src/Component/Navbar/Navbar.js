import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="App">


            <nav className="  navbar navbar-expand-lg bg-body-tertiary shadow p-3  bg-body-tertiary rounded">
                <div className="container mt-2">
                    <Link className="navbar-brand me-5 " to="/"> <img src='https://www.dharnigroup.com/wp-content/uploads/2021/10/cropped-Logo-on-for-Dilwai-27-Oct-2019-1-1.jpg' /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <div class="dropdown">
                                    <Link to='/' >  <button class="dropbtn">Home</button></Link>

                                </div>
                            </li>
                            <li className="nav-item">
                                <div class="dropdown">

                                    <button class="dropbtn">Rent by Project</button>
                                    <div class="dropdown-content">
                                        <Link to="/propertylist">Adarsh Vista</Link>
                                        <Link to="/propertylist">Apollo Greens</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div class="dropdown">

                                    <button class="dropbtn">Rent by Location</button>
                                    <div class="dropdown-content">
                                        <Link to="/propertylist">White Field</Link>
                                        <Link to="/propertylist">Kodihalli</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div class="dropdown">
                                    <button class="dropbtn">Buy by Project</button>
                                    <div class="dropdown-content">
                                        <Link to="/propertylist">Adarsh Vista</Link>
                                        <Link to="/propertylist">Apollo Greens</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div class="dropdown">


                                    <button class="dropbtn">Buy by Location</button>
                                    <div class="dropdown-content">
                                        <Link to="/propertylist">Ashok Nagar</Link>
                                        <Link to="/propertylist">Jaya Mahal</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div class="dropdown">
                                    <button class="dropbtn">Search by Type</button>
                                    <div class="dropdown-content">
                                        <Link to="/propertylist">Marathalli</Link>
                                        <Link to="/propertylist">Bellendur</Link>
                                    </div>
                                </div>

                            </li>
                            <li className="nav-item">
                                <div class="dropdown">
                                    <button class="dropbtn">List by Property</button>
                                    <div class="dropdown-content">
                                        <Link to="/propertySignup">List a Property</Link>
                                        <Link to="/plotSignup">List a Plot</Link>
                                    </div>
                                </div>
                            </li>


                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar;