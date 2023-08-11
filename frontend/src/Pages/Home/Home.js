import React, { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { API_BASE_URL } from '../../config';

const Home = () => {

  const [projects, setProjects] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchAllProject();

  }, [])

  const fetchAllProject = async () => {
    const res = await axios.get(`${API_BASE_URL}/getAllProjects`);
    const resp = await axios.get(`${API_BASE_URL}/getAllLocation`);
    setProjects(res.data);
    setData(resp.data);
    //console.log("hello",projects)
  }

  const categorizeProjects = () => {
    const categories = {
      AtoE: [],
      FtoM: [],
      NtoS: [],
      TtoZ: [],
    };

    projects.forEach(project => {
      const firstLetter = project.projectName.charAt(0).toUpperCase();
      if (firstLetter >= 'A' && firstLetter <= 'E') {
        categories.AtoE.push(project);
      } else if (firstLetter >= 'F' && firstLetter <= 'M') {
        categories.FtoM.push(project);
      } else if (firstLetter >= 'N' && firstLetter <= 'S') {
        categories.NtoS.push(project);
      } else if (firstLetter >= 'T' && firstLetter <= 'Z') {
        categories.TtoZ.push(project);
      }
    });

    // Sort projects within each category
    Object.keys(categories).forEach(category => {
      categories[category].sort((a, b) => a.projectName.localeCompare(b.projectName));
    });

    return categories;
  };


  const columns = {
    EastBLR: data.filter(item => item.projectDirection === "East"),
    WestBLR: data.filter(item => item.projectDirection === "West"),
    CentralBLR: data.filter(item => item.projectDirection === "Central"),
    NorthBLR: data.filter(item => item.projectDirection === "North"),
    SouthBLR: data.filter(item => item.projectDirection === "South"),
  };

  // Sort each column's data by showLocation
  for (const columnKey in columns) {
    columns[columnKey].sort((a, b) => a.showLocation.localeCompare(b.showLocation));
  }






  const categories = categorizeProjects();
  const handleSendData = (dataToSend) => {
    localStorage.removeItem("ProjectName");
    localStorage.setItem("ProjectName", dataToSend)
  };

  const handleLocationData=(location)=>{
    localStorage.removeItem("location");
    localStorage.setItem("location",location);
  }

  return (
    <>
      {/* <div className='background ' >
      </div> */}
      <div className='container shadow-none   bg-body-tertiary rounded mt-5 '>
        <div className=' '>
          <h3 className='fw-bold mb-3 text-muted text-center'>Buy By Project</h3>

          <div className="columns">
            <div className="column">
              <h4 className='text-center'>A to E</h4>
              <ul>
                {categories.AtoE.map(project => (
                  <li key={project._id}><Link className='text-muted text-decoration-none test' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}>{project.projectName}</Link></li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h4 className='text-center'>F to M</h4>
              <ul>
                {categories.FtoM.map(project => (
                  <li key={project._id}><Link className='text-muted text-decoration-none test' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}>{project.projectName}</Link></li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h4 className='text-center'>N to S</h4>
              <ul >
                {categories.NtoS.map(project => (
                  <li key={project._id}>
                    <Link className='text-muted  text-decoration-none test' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}>{project.projectName}</Link>

                  </li>
                ))}
              </ul>
            </div>
            <div className="column">
              <h4 className='text-center'>T to Z</h4>
              <ul>
                {categories.TtoZ.map(project => (
                  <li key={project._id}><Link className='text-muted text-decoration-none test' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}>{project.projectName}</Link></li>
                ))}
              </ul>
            </div>
          </div>


        </div>
        <div className=' text-center '>
          <h3 className='fw-bold fs-3 text-center text-muted my-4'>Buy By Location</h3>
          <div className="Apps">
            {Object.keys(columns).map(columnKey => (
              <div className="columnn" key={columnKey}>
                <h4 className='text-center'>{columnKey}</h4>
                <ul>
                  {columns[columnKey].map(item => (
                    <li key={item._id}><a className='text-muted test text-decoration-none' onClick={()=>handleLocationData(item.showLocation)}  href={'/builderProjectByLocation'}>{item.showLocation}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* <div className='container'>
        <h3 className='mt-5 mb-5  text-center text-color' >How can we be of assistance today?</h3>
        <div className="p-2 text-center">
          <div className="row g-2">
            <div className="col-lg-6 col-sm-12">
              <div className="p-1 border bg-light">
                <Link to='/requirement'><img src="https://images.unsplash.com/photo-1573167278390-0699fb12be46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." /></Link>


              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="p-1 border bg-light">
                <Link to='/requirement'><img src="https://images.unsplash.com/photo-1600607688960-e095ff83135c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." /></Link>


              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="p-1 border bg-light">
                <Link to='/requirement'><img src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." /></Link>

              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="p-1 border bg-light">
                <Link to='/requirement'><img src="https://images.unsplash.com/photo-1565953554309-d181306db7d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." /></Link>

              </div>
            </div>
          </div>
        </div>
      </div> */}



    </>
  )
}

export default Home