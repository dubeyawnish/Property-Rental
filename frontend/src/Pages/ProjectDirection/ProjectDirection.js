import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

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

    return (
        <div className='container'>
            {loader ?
                <div className='mb-3 mt-3 col-md-12 text-center'>
                    <div className="  spinner-border text-primary" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                </div>
                : ""}




            <h3 className=' my-5 fw-bold text-muted'>  Exclusive Project Portfolio in {direction}  </h3>
            <ul className="cards dist">
                {projects?.map(project => (
                    <li className="cards_item">
                        <div className="card zoom">
                            <div className="card_image">
                                <Link className='togg' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}> <img src={project.projectImg} height={250} width={300} /></Link>
                            </div>
                            <div className="card_content">
                                <Link className='togg text-decoration-none' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}><h2 className="card_title text-center">{project.projectName}</h2></Link>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>


          
        </div>
    )
}

export default ProjectDirection;