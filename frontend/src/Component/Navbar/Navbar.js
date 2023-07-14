import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo/logo.jpg'
import axios from 'axios'
import { API_BASE_URL } from '../../config';



const Navbar = () => {
    const [projects, setProjects] = useState([]);




    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/getAllProjects`);
                setProjects(response.data);

                //console.log(projects);
            }
            catch (error) {
                console.error(error);
            }
        };


        fetchData();
    }, []);







    return (
        <div className="App">




            <nav className="  navbar navbar-expand-lg bg-body-tertiary shadow p-3  bg-body-tertiary rounded">
                 
                <div className="container mt-2">
                    <Link className="navbar-brand me-5 " to="/"> <img src={Logo} /></Link>


                    <label for="drop" className="toggle">&#8801; Menu</label>
                    <input type="checkbox" id="drop" />

                    <ul className=" navbar-nav me-auto mb-2 mb-lg-0 menu">
                        <li ><Link to='/' > Home</Link>
                            <input type="checkbox" id="drop-1" />
                            <ul>
                                <li><Link to="/serviceFee">Service & Fee</Link></li>
                                <li><Link to="/contactUs">Contact Us</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                            </ul>
                        </li>



                        <li >

                            <label for="drop-1" className="toggle">Commercial</label>
                            <a href="#">Commercial</a>
                            <input type="checkbox" id="drop-1" />
                            <ul>

                                <li>


                                    <label for="drop-3" className="toggle">Buy </label>
                                    <a href="#">Buy</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul>

                                        {projects.map(project => (
                                            <li><Link to={`/getPropertiesByProject/${project._id}`}>{project.projectName}</Link></li>
                                        ))}


                                    </ul>

                                </li>
                                <li>


                                    <label for="drop-3" className="toggle">Sell </label>
                                    <a href="#">Sell</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul>
                                        <li><Link to='/propertylist'>Shobha</Link></li>
                                        <li><Link to='/propertylist'>Admas</Link></li>

                                    </ul>

                                </li>
                            </ul>


                        </li>
                        <li>


                            <label for="drop-2" className="toggle">Residential +</label>
                            <a href="#">Residential</a>
                            <input type="checkbox" id="drop-2" />
                            <ul>

                                <li>


                                    <label for="drop-3" className="toggle">Buy </label>
                                    <a href="#">Buy</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul>
                                        <li><Link to='/propertylist'>Shobha</Link></li>
                                        <li><Link to='/propertylist'>Admas</Link></li>
                                    </ul>

                                </li>
                                <li>


                                    <label for="drop-3" className="toggle">Sell </label>
                                    <a href="#">Sell</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul>
                                        <li><Link to='/propertylist'>Shobha</Link></li>
                                        <li><Link to='/propertylist'>Admas</Link></li>
                                    </ul>

                                </li>
                            </ul>
                        </li>

                        <li>


                            <label for="drop-2" className="toggle">Search By Type</label>
                            <a href="#">Search By Type</a>
                            <input type="checkbox" id="drop-2" />
                            <ul>

                                <li>


                                    <label for="drop-3" className="toggle">Buy </label>
                                    <a href="#">Buy</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul>
                                        <li><Link to='/propertylist'>Shobha</Link></li>
                                        <li><Link to='/propertylist'>Admas</Link></li>
                                    </ul>

                                </li>
                                <li>


                                    <label for="drop-3" className="toggle">Sell </label>
                                    <a href="#">Sell</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul>
                                        <li><Link to='/propertylist'>Shobha</Link></li>
                                        <li><Link to='/propertylist'>Admas</Link></li>
                                    </ul>

                                </li>
                            </ul>
                        </li>

                        <li><Link to='/' > List Property</Link>
                            <input type="checkbox" id="drop-1" />
                            <ul>
                                <li><Link to="/propertySignup">List Property</Link></li>
                                <li> <Link to="/plotSignup">List a Plot</Link></li>

                            </ul>
                        </li>







                        <li><Link to="/aboutus">About</Link></li>
                    </ul>




                </div>
            </nav>

        </div>
    )
}

export default Navbar;