import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../config';

import './ProjectByLocation.css'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet-async";
const ProjectByLocation = () => {
    const [projects, setProjects] = useState([]);
    //const location = localStorage.getItem("location");
    const [loader, setLoader] = useState(false);
    const { location } = useParams();


    useEffect(() => {
        setLoader(true);
        //const location = localStorage.getItem("location")
        projectCall(location);
    }, [location]);

    const projectCall = async (location) => {
        //const reqbody={location};

        //const response = await axios.post(`${API_BASE_URL}/getAllProjectsByLocation`,reqbody);
        const response = await axios.get(`${API_BASE_URL}/getAllProjectsByLocation/${location}`);
        const sortedProjects = response.data.sort((a, b) => {
            return a.projectName.localeCompare(b.projectName);
        });
        setLoader(false);
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
         <Helmet>
        <title>{`${location} - Dharni Properties` }</title>
        <meta name="description" content="Hemant Dharnidharka as Founder of Dharni Properties, is heading the overall operations of the Group. He has been responsible for developing large strategic business endeavors for Dharni Properties." />
        <link rel="canonical" href="/" />
      </Helmet>


            <h3 className=' my-5 fw-bold text-muted'>  Exclusive Project Portfolio in {location} location  </h3>

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

export default ProjectByLocation