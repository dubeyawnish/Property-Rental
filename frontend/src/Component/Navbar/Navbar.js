import React, { useState,useEffect} from 'react'
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


                    <label for="drop" class="toggle">&#8801; Menu</label>
                    <input type="checkbox" id="drop" />


                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="ms-2 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">

                                <div className="dropdown">
                                    <Link to='/' >  <button className="ms-5 dropbtn">Home</button></Link>
                                    <div className="dropdown-content">
                                        <Link to="/serviceFee">Service & Fee</Link>
                                        <Link to="/contactUs">Contact Us</Link>
                                        <Link to="/carrier">Careers</Link>


                                    </div>

                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown">

                                    <button className="dropbtn">Residential</button>
                                    <div className="dropdown-content">
                                        <Link to='/propertylist'>Buy</Link>
                                        <Link to="/propertylist">Sell</Link>
                                    </div>
                                </div>
                            </li>

































                            <li className="nav-item">
                                <div className="dropdown">

                                    <button className="dropbtn">Commercial</button>
                                    <div className="dropdown-content">
                                        <Link to="/propertylist">White Field</Link>
                                        <Link to="/propertylist">Kodihalli</Link>
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

                            <li className="nav-item">
                                <div className="dropdown">

                                    <Link to="/aboutus"><button className="dropbtn">About Us</button></Link>

                                </div>
                            </li>


                        </ul>

                    </div> */}






                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 menu">
                        <li><Link to='/' > Home</Link>
                            <input type="checkbox" id="drop-1" />
                            <ul>
                                <li><Link to="/serviceFee">Service & Fee</Link></li>
                                <li><Link to="/contactUs">Contact Us</Link></li>
                                <li><Link to="/carrier">Careers</Link></li>
                            </ul>
                        </li>



                        <li>
                            {/* <!-- First Tier Drop Down --> */}
                            <label for="drop-1" class="toggle">Commercial</label>
                            <a href="#">Commercial</a>
                            <input type="checkbox" id="drop-1" />
                            <ul>

                                <li>

                                    {/* <!-- Second Tier Drop Down --> */}
                                    <label for="drop-3" class="toggle">Buy </label>
                                    <a href="#">Buy</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul>

                                        {projects.map(project=>(
                                            <li><Link to={`/getPropertiesByProject/${project._id}`}>{project.projectName}</Link></li>
                                        ))}
                                      

                                    </ul>

                                </li>
                                <li>

                                    {/* <!-- Second Tier Drop Down --> */}
                                    <label for="drop-3" class="toggle">Sell </label>
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

                            {/* <!-- First Tier Drop Down --> */}
                            <label for="drop-2" class="toggle">Residential +</label>
                            <a href="#">Residential</a>
                            <input type="checkbox" id="drop-2" />
                            <ul>

                                <li>

                                    {/* <!-- Second Tier Drop Down --> */}
                                    <label for="drop-3" class="toggle">Buy </label>
                                    <a href="#">Buy</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul>
                                        <li><Link to='/propertylist'>Shobha</Link></li>
                                        <li><Link to='/propertylist'>Admas</Link></li>
                                    </ul>

                                </li>
                                <li>

                                    {/* <!-- Second Tier Drop Down --> */}
                                    <label for="drop-3" class="toggle">Sell </label>
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

                            {/* <!-- First Tier Drop Down --> */}
                            <label for="drop-2" class="toggle">Search By Type</label>
                            <a href="#">Search By Type</a>
                            <input type="checkbox" id="drop-2" />
                            <ul>

                                <li>

                                    {/* <!-- Second Tier Drop Down --> */}
                                    <label for="drop-3" class="toggle">Buy </label>
                                    <a href="#">Buy</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul>
                                        <li><Link to='/propertylist'>Shobha</Link></li>
                                        <li><Link to='/propertylist'>Admas</Link></li>
                                    </ul>

                                </li>
                                <li>

                                    {/* <!-- Second Tier Drop Down --> */}
                                    <label for="drop-3" class="toggle">Sell </label>
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