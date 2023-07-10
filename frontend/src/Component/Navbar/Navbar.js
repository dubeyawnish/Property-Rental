import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo/logo.jpg'

const Navbar = () => {
    return (
        <div className="App">


            <nav className="  navbar navbar-expand-lg bg-body-tertiary shadow p-3  bg-body-tertiary rounded">
                <div className="container mt-2">
                    <Link className="navbar-brand me-5 " to="/"> <img src={Logo} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="ms-2 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <div className="dropdown">
                                    <Link to='/' >  <button className="dropbtn">Home</button></Link>
                                    <div className="dropdown-content">
                                        <Link to="/serviceFee">Service & Fee</Link>
                                        <Link to="/contactUs">Contact Us</Link>
                                        <Link to="/carrier">Careers</Link>
                                        <Link to="/aboutus">About Us</Link>

                                    </div>

                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">

                                    <button className="dropbtn">Rent by Project</button>
                                    <div className="dropdown-content">
                                        <Link to="/propertylist">Adarsh Vista</Link>
                                        
                                        <Link to="/propertylist">Apollo Greens</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">

                                    <button className="dropbtn">Rent by Location</button>
                                    <div className="dropdown-content">
                                        <Link to="/propertylist">White Field</Link>
                                        <Link to="/propertylist">Kodihalli</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="dropbtn">Buy by Project</button>
                                    <div className="dropdown-content">
                                        <Link to="/propertylist">Adarsh Vista</Link>
                                        <Link to="/propertylist">Apollo Greens</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">


                                    <button className="dropbtn">Buy by Location</button>
                                    <div className="dropdown-content">
                                        <Link to="/propertylist">Ashok Nagar</Link>
                                        <Link to="/propertylist">Jaya Mahal</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="dropbtn">Search by Type</button>
                                    <div className="dropdown-content">
                                        <Link to="/propertylist">Marathalli</Link>
                                        <Link to="/propertylist">Bellendur</Link>
                                    </div>
                                </div>

                            </li>
                            <li className="nav-item">
                                <div className="dropdown">
                                    <button className="dropbtn">List by Property</button>
                                    <div className="dropdown-content">
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