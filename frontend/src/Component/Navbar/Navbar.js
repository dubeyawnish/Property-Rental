import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import Logo from '../../Images/Logo/logo.jpg'
import axios from 'axios'
import { API_BASE_URL } from '../../config';



const Navbar = () => {

    const [projects, setProjects] = useState([]);
    const [locations, setLocations] = useState([]);
    const [plotPorject, setPlotProject] = useState([]);
    const [plotLocation, setPlotLocation] = useState([])
    const [builders, setBuilders] = useState([]);






    function adjustDropdownColumns() {
        const dropdowns = document.querySelectorAll('.dropdown-buy-by-location');

        dropdowns.forEach(dropdown => {
            const dropdownRect = dropdown.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (dropdownRect.bottom > windowHeight) {
                dropdown.style.columnCount = '2';
            } else {
                dropdown.style.columnCount = '1';
            }
        });
    }

    // Call the function after rendering
    useEffect(() => {
        adjustDropdownColumns();
    }, []);






    const fetchData = async () => {
        try {
            //const response = await axios.get(`${API_BASE_URL}/getAllProjects`);
            const res = await axios.get(`${API_BASE_URL}/getAllLocation`);
            //const resProjectPlot = await axios.get(`${API_BASE_URL}/getAllPlotProjects`);
            //const resLocationPlot = await axios.get(`${API_BASE_URL}/getPlotByLocation`);
            const resBuild = await axios.get(`${API_BASE_URL}/getAllBuilder`);

            //setProjects(response.data);
            setLocations(res.data);
            //setPlotProject(resProjectPlot.data);
            //setPlotLocation(resLocationPlot.data);
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


    // const projectCall = async (builderId) => {

    //     const response = await axios.get(`${API_BASE_URL}/getAllProjectByBuilders/${builderId}`);
    //     setProjects(response.data);
    //     //console.log(projects);

    // }





    // const handleSendData = (dataToSend) => {
    //     localStorage.clear();
    //     localStorage.setItem("ProjectName", dataToSend)
    // };

    const builderPro = (builderId, builderName) => {
        //console.log(builderId)
        localStorage.removeItem("BuilderId");
        localStorage.removeItem("BuilderName");
        localStorage.setItem("BuilderId", builderId);
        localStorage.setItem("BuilderName", builderName);

    }
    const handleLocationData = (location) => {
        localStorage.removeItem("location");
        localStorage.setItem("location", location);
    }





    return (
        <div className="App">
            <nav className="z-3   navbar navbar-expand-lg bg-body-tertiary shadow p-3   bg-body-tertiary rounded">
                <div className="container ">
                    <Link className=" me-5 " to="/"> <img src={Logo} className='img-fluid' /></Link>
                    <label htmlFor="drop" className="toggle">&#8801; Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul className=" navbar-nav me-auto mb-2 mb-lg-0 menu">
                        <li >
                            <label for="drop-1" className="toggle">Home</label>
                            <Link className='fsize' to='/' > Home</Link>
                            <input type="checkbox" id="drop-1" />
                            <ul>
                                <li><Link className='togg fsize' to="/serviceFee">Service & Fee</Link></li>
                                <li><Link className='togg fsize' to="/contactUs">Contact Us</Link></li>
                                <li><Link className='togg fsize' to="/careers">Careers</Link></li>
                            </ul>
                        </li>
                        <li >
                            <label for="drop-2" className="toggle">Residential</label>
                            <Link className='fsize' to="/residentialProjects">Residential</Link>
                            <input type="checkbox" id="drop-2" />
                            <ul>
                                <li>
                                    <label for="drop-3" className="toggle">Buy by Builder </label>
                                    <a className='fsize' href="#">Buy by Builder</a>
                                    <input type="checkbox" id="drop-3" />
                                    <ul className="dropdown-buy-by-location">
                                        {Array.isArray(builders) && builders.map(builder => (
                                            <>
                                                <li >
                                                    <a onClick={() => builderPro(builder._id, builder.builderName)} href={`/builderProject/${builder._id}`}><label for="drop-12" className="toggle "> </label></a>
                                                    {/* <Link  onMouseOver={() => projectCall(builder._id)} to="#">{builder.builderName}</Link> */}
                                                    <Link onClick={() => builderPro(builder._id, builder.builderName)} className='fsize togg' to={`/builderProject/${builder._id}`} >{builder.builderName}</Link>
                                                    <input type="checkbox" id="drop-12" />
                                                    <ul>
                                                        {projects?.map(project => (
                                                            <li>
                                                                {/* {<Link to={{ pathname: `/getPropertiesByProject/${project._id}`, state: "hello" }}>
                                                                    {project.projectName}
                                                                </Link>} */}
                                                                {/* <a className='togg' onClick={() => handleSendData(project.projectName)} href={`/getPropertiesByProject/${project._id}`}>{project.projectName}</a> */}
                                                            </li>
                                                        ))}
                                                        {plotPorject?.map(project => (
                                                            <li>
                                                                {/* <a className='togg' href={`/getPlotByProject/${project._id}`}>{project.projectName}</a> */}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            </>
                                        ))
                                        }
                                    </ul>
                                </li>
                                <li >
                                    <label for="drop-4" className="toggle">Buy by Location </label>
                                    <a className='fsize' href="#">Buy by Location</a>
                                    <input type="checkbox" id="drop-4" />
                                    <ul className="dropdown-buy-by-location">
                                        {locations.map(location => (
                                            <li ><Link onClick={() => handleLocationData(location.showLocation)} className='togg fsize' to={`/builderProjectByLocation/${location.showLocation}`}>{location.showLocation}</Link></li>
                                        ))}
                                        {/* {plotLocation.map(location => (
                                            <li><Link className='togg' to={`/getPlotByLocation/${location._id}`}>{location.location}</Link></li>
                                        ))} */}
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <label for="drop-5" className="toggle">Commercial </label>
                            <Link className='fsize' to="/">Commercial</Link>
                            <input type="checkbox" id="drop-5" />
                            <ul>
                                <li>
                                    <label for="drop-6" className="toggle">Buy by Project </label>
                                    <a className='fsize' href="#">Buy by Project</a>
                                    <input type="checkbox" id="drop-6" />
                                    <ul>
                                        <li><Link to='/propertylist'></Link></li>
                                        <li><Link to='/propertylist'></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="drop-7" className="toggle">Buy by location </label>
                                    <a className='fsize' href="#">Buy by location</a>
                                    <input type="checkbox" id="drop-7" />
                                    <ul>
                                        <li><Link to='/propertylist'></Link></li>
                                        <li><Link to='/propertylist'></Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        {/* <li>
                            <label for="drop-8" className="toggle">Search By Type</label>
                            <Link className='fsize' to="/">Search By Type</Link>
                            <input type="checkbox" id="drop-8" />
                            <ul>
                                <li>
                                    <label for="drop-9" className="toggle">Buy Apartment </label>
                                    <a className='fsize' href="#">Buy Apartment</a>
                                    <input type="checkbox" id="drop-9" />
                                    <ul>
                                        {locations?.map(location => (
                                            <li>
                                                <a className='togg' href={`/getPropertiesByLocation/${location._id}`}>{location.location}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>
                                    <label for="drop-10" className="toggle">Buy Villa </label>
                                    <a className='fsize' href="#">Buy Villa</a>
                                    <input type="checkbox" id="drop-10" />
                                    <ul>
                                        <li><Link to='/propertylist'></Link></li>
                                        <li><Link to='/propertylist'></Link></li>
                                    </ul>
                                </li>
                                <li>
                                    <label for="drop-12" className="toggle">Buy Plot </label>
                                    <a className='fsize' href="#">Buy Plot</a>
                                    <input type="checkbox" id="drop-12" />
                                    <ul>
                                        {plotLocation?.map(location => (
                                            <li>
                                                <Link to={`/getPlotByLocation/${location._id}`}>{location.location}</Link>

                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            </ul>
                        </li> */}
                        <li> <label for="drop-11" className="toggle">List Property </label>
                            <Link className='fsize' to='/' > List Property</Link>
                            <input type="checkbox" id="drop-11" />
                            <ul>
                                <li><Link className='togg fsize' to="/propertySignup">List a Property</Link></li>
                                <li>  <Link className='togg fsize' to="/plotSignup">List a Plot</Link></li>
                            </ul>
                        </li>


                        <li>
                            <Link className='togg fsize' to="/aboutus">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;