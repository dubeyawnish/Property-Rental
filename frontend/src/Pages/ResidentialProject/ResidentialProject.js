import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { useLocation, Link } from 'react-router-dom';
import './ResidentailProject.css';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";



const ResidentailProjects = () => {
    const [projects, setProjects] = useState([]);

    const [loader, setLoader] = useState(false);

    // const location = useLocation();
    // const { fromHome } = location.state;

    // console.log("Hello",fromHome);


    useEffect(() => {
        setLoader(true);

        projectCall();
    }, []);

    const projectCall = async () => {

        const response = await axios.get(`${API_BASE_URL}/getAllProjects`);
        setLoader(false);
        // setProjects(response.data);
        // Sort projects alphabetically by projectName
        const sortedProjects = response.data.sort((a, b) => {
            return a.projectName.localeCompare(b.projectName);
        });

        setProjects(sortedProjects);

        //console.log(projects);
    }

    const handleSendData = (dataToSend) => {
        localStorage.removeItem("ProjectName");
        localStorage.setItem("ProjectName", dataToSend)
    };

    const Loading = () => {
        return (
            <>
                <div className='row mb-4 text-center'>
                    <div className='col-lg-3 col-md-6 col-sm-12 mb-5' >
                        <Skeleton height={300} width={300} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Skeleton height={300} width={300} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Skeleton height={300} width={300} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Skeleton height={300} width={300} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Skeleton height={300} width={300} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Skeleton height={300} width={300} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Skeleton height={300} width={300} />
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                        <Skeleton height={300} width={300} />
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className='container'>
            {/* {loader ?
        <div className='mb-3 mt-3 col-md-12 text-center'>
          <div className="  spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
        : ""} */}




            <h3 className=' my-5 fw-bold text-muted'>Exclusive Residential Project Portfolio  </h3>
            {loader ? <Loading /> :
                <ul className="cards dist">
                    {projects?.map(project => (
                        <li className="cards_item">
                            <div className="card zoom">
                                <div className="card_image">
                                    <Link className='togg' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}> <img src={project.projectImg} loading='lazy' height={250} width={300} /></Link>
                                </div>
                                <div className="card_content">
                                    <Link className='togg text-decoration-none' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}><h2 className="card_title text-center">{project.projectName}</h2></Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            }


            {/* <div className='d-flex flex-wrap   mb-3'>
                {projects?.map(project => (
                    <div className='col-lg-3 col-md-3 col-sm-12 mb-3  '>
                        <div className="card"  >
                            <a className='togg' onClick={() => handleSendData(project.projectName)} href={`/getPropertiesByProject/${project._id}`}><img src={project.projectImg} className="card-img-top" height={250} alt="Project Image" /></a>
                            <div className="card-body">
                                <a className='togg text-decoration-none' onClick={() => handleSendData(project.projectName)} href={`/getPropertiesByProject/${project._id}`}><h5 className="card-title  text-center text-muted">{project.projectName}</h5></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    )
}

export default ResidentailProjects;