import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo/logo.jpg'
import axios from 'axios'
import { API_BASE_URL } from '../../config';



const Navbar = (props) => {

    const [projects, setProjects] = useState([]);
    const [locations, setLocations] = useState([]);
    const [plotPorject, setPlotProject] = useState([]);
    const [plotLocation, setPlotLocation] = useState([])
    const [builders, setBuilders] = useState([]);


    const fetchData = async () => {
        try {
            //const response = await axios.get(`${API_BASE_URL}/getAllProjects`);
            const res = await axios.get(`${API_BASE_URL}/getByLocation`);
            const resProjectPlot = await axios.get(`${API_BASE_URL}/getAllPlotProjects`);
            const resLocationPlot = await axios.get(`${API_BASE_URL}/getPlotByLocation`);
            const resBuild=await axios.get(`${API_BASE_URL}/getAllBuilder`);

            //setProjects(response.data);
            setLocations(res.data);
            setPlotProject(resProjectPlot.data);
            setPlotLocation(resLocationPlot.data);
            setBuilders(resBuild.data)

            //console.log(projects);
        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    const projectCall =async (builderId)=>{

        const response = await axios.get(`${API_BASE_URL}/getAllProjectByBuilder/${builderId}`);
        setProjects(response.data);
        console.log(projects);
        
    }







    return (
        <div className="App">
            <nav className="z-3   navbar navbar-expand-lg bg-body-tertiary shadow p-3  bg-body-tertiary rounded">
                <div className="container ">
                    <Link className=" me-5 " to="/"> <img src={Logo} /></Link>
                    <label for="drop" className="toggle">&#8801; Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className=" navbar-nav me-auto mb-2 mb-lg-0 menu">
                        <li >
                            <label for="drop-1" class="toggle">Home</label>
                            <Link to='/' > Home</Link>
                            <input type="checkbox" id="drop-1" />
                            <ul>
                                <li><Link to="/serviceFee">Service & Fee</Link></li>
                                <li><Link to="/contactUs">Contact Us</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                            </ul>
                        </li>
                        <li >
                            <label for="drop-2" className="toggle">Residential</label>
                            <a href="/">Residential</a>
                            <input type="checkbox" id="drop-2" />
                            <ul>
                                <li>
                                    <label for="drop-3" className="toggle">Buy by Project </label>
                                    <a href="#">Buy by Project</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul>
                                        {  Array.isArray(builders) &&   builders.map(builder => (
                                            <>
                                        <li >
                                            <label for="drop-12" onClick={() => projectCall(builder._id)} className="toggle">{builder.builderName} </label>
                                            <a onMouseOver={() => projectCall(builder._id)} href="#">{builder.builderName}</a>
                                            <input type="checkbox" id="drop-12" />
                                            <ul>
                                                {projects.map(project => (
                                                    <li>
                                                        {/* {<Link to={{pathname:`/getPropertiesByProject/${project._id}`,
                                                    state:{data:true}
                                                }} >{project.projectName}</Link>} */}
                                                <a href={`/getPropertiesByProject/${project._id}`}>{project.projectName}</a>
                                                
                                                
                                                </li>
                                                ))}
                                                {plotPorject.map(project => (
                                                    <li><a href={`/getPlotByProject/${project._id}`}>{project.projectName}</a></li>
                                                ))}
                                            </ul>
                                        </li>
                                        </>
                                        ))
                                     }
                                    </ul>
                                </li>
                                <li>
                                    <label for="drop-4" className="toggle">Buy by Location </label>
                                    <a href="#">Buy by Location</a>
                                    <input type="checkbox" id="drop-4" />
                                    <ul>
                                        {locations.map(location => (
                                            <li><a href={`/getPropertiesByLocation/${location._id}`}>{location.location}</a></li>
                                        ))}
                                        {plotLocation.map(location => (
                                            <li><Link to={`/getPlotByLocation/${location._id}`}>{location.location}</Link></li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <label for="drop-5" className="toggle">Commercial </label>
                            <a href="/">Commercial</a>
                            <input type="checkbox" id="drop-5" />
                            <ul>
                                <li>
                                    <label for="drop-6" className="toggle">Buy by Project </label>
                                    <a href="#">Buy by Project</a>
                                    <input type="checkbox" id="drop-6" />
                                    <ul>
                                        <li><Link to='/propertylist'></Link></li>
                                        <li><Link to='/propertylist'></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="drop-7" className="toggle">Buy by location </label>
                                    <a href="#">Buy by location</a>
                                    <input type="checkbox" id="drop-7" />
                                    <ul>
                                        <li><Link to='/propertylist'></Link></li>
                                        <li><Link to='/propertylist'></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <label for="drop-8" className="toggle">Search By Type</label>
                            <a href="/">Search By Type</a>
                            <input type="checkbox" id="drop-8" />
                            <ul>
                                <li>
                                    <label for="drop-9" className="toggle">Buy Apartment </label>
                                    <a href="#">Buy Apartment</a>
                                    <input type="checkbox" id="drop-9" />
                                    <ul>
                                        {locations.map(location => (
                                            <li><a href={`/getPropertiesByLocation/${location._id}`}>{location.location}</a></li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <label for="drop-10" className="toggle">Buy Villa </label>
                                    <a href="#">Buy Villa</a>
                                    <input type="checkbox" id="drop-10" />
                                    <ul>
                                        <li><Link to='/propertylist'></Link></li>
                                        <li><Link to='/propertylist'></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="drop-12" className="toggle">Buy Plot </label>
                                    <a href="#">Buy Plot</a>
                                    <input type="checkbox" id="drop-12" />
                                    <ul>
                                        {plotLocation.map(location => (
                                            <li><Link to={`/getPlotByLocation/${location._id}`}>{location.location}</Link></li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li> <label for="drop-11" className="toggle">List Property </label>
                            <Link to='/' > List Property</Link>
                            <input type="checkbox" id="drop-11" />
                            <ul>
                                <li><Link to="/propertySignup">List a Property</Link></li>
                                <li> <Link to="/plotSignup">List a Plot</Link></li>
                            </ul>
                        </li>


                        <li>
                            <Link to="/aboutus">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;