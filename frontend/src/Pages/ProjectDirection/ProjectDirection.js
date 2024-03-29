import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet-async";

const ProjectDirection = () => {

    const { direction } = useParams();
    const [projects, setProjects] = useState([]);
    const[loader,setLoader]=useState(false);
    //console.log(direction);
    useEffect(() => {
        setLoader(true);
        fetchAllProject();
    
    }, []);
    const fetchAllProject = async () => {
        const response = await axios.get(`${API_BASE_URL}/getAllProjects`);
        const filteredProjects = response.data.filter(item => {
            if (direction === 'EastBLR') {
                return item.projectDirection === 'East';
            } else if (direction === 'WestBLR') {
                return item.projectDirection === 'West';
            } else if (direction === 'NorthBLR') {
                return item.projectDirection === 'North';
            }
            else if (direction === 'CentralBLR') {
                return item.projectDirection === 'Central';
            }
            else if (direction === 'SouthBLR') {
                return item.projectDirection === 'South';
            }
            return false; // Default case if direction doesn't match any of the options
        });

        const sortedProjects = filteredProjects.sort((a, b) => {
            return a.projectName.localeCompare(b.projectName);
        });

        setProjects(sortedProjects);
        //setProjects(filteredProjects);
        setLoader(false);
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
        <title>{`${direction} - Dharni Properties` }</title>
        <meta name="description" content="Hemant Dharnidharka as Founder of Dharni Properties, is heading the overall operations of the Group. He has been responsible for developing large strategic business endeavors for Dharni Properties." />
        <link rel="canonical" href="/" />
      </Helmet>



            <h3 className=' my-5 fw-bold text-muted'>  Exclusive Project Portfolio in {direction}  </h3>
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

          
        </div>
    )
}

export default ProjectDirection;