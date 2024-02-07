import React, { useState, useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Helmet } from "react-helmet-async";

const Home = () => {

  const [projects, setProjects] = useState([]);
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    fetchAllProject();

  }, [])

  const fetchAllProject = async () => {
    const res = await axios.get(`${API_BASE_URL}/getAllProjects`);
    const resp = await axios.get(`${API_BASE_URL}/getAllLocation`);
    setProjects(res.data);
    setData(resp.data);
    setLoader(false);
    //console.log("hello",projects)
  }



  const categorizeProjects = () => {
    const categories = {
      AtoB: [],
      CtoM: [],
      NtoR: [],
      StoZ: [],
    };

    projects.forEach(project => {
      const firstLetter = project.projectName.charAt(0).toUpperCase();
      if (firstLetter >= 'A' && firstLetter <= 'B') {
        categories.AtoB.push(project);
      } else if (firstLetter >= 'C' && firstLetter <= 'M') {
        categories.CtoM.push(project);
      } else if (firstLetter >= 'N' && firstLetter <= 'R') {
        categories.NtoR.push(project);
      } else if (firstLetter >= 'S' && firstLetter <= 'Z') {
        categories.StoZ.push(project);
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
    // CentralBLR: data.filter(item => item.projectDirection === "Central"),
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

  const handleLocationData = (location) => {
    localStorage.removeItem("location");
    localStorage.setItem("location", location);
  }


  const Loading = () => {
    return (
      <>

        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>
        <div className="col-12  ">
          <Skeleton height={30} width={200} />
        </div>



      </>
    );
  };

  return (
    <>
      {/* <div className='background ' >
      </div> */}
       <Helmet>
        <title>{`Home - Dharni Properties` }</title>
        <meta name="description" content="Hemant Dharnidharka as Founder of Dharni Properties, is heading the overall operations of the Group. He has been responsible for developing large strategic business endeavors for Dharni Properties." />
        <link rel="canonical" href="/" />
      </Helmet>

      <div className='container shadow-none   bg-body-tertiary rounded mt-5 '>
        <div className=' '>
          <h3 className='fw-bold mb-3 text-muted text-center'>Buy By Project</h3>

          <div className="columns ">
            <div className="column">
              <h4 className=' text-muted'>A to B</h4>
              {loader ? <Loading /> :
                <ul>
                  {categories.AtoB.map(project => (
                    <li key={project._id}><Link className='text-muted text-decoration-none test' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}>{project.projectName}</Link></li>
                  ))}
                </ul>}
            </div>
            <div className="column">
              <h4 className=' text-muted'>C to M</h4>
              {loader ? <Loading /> :
                <ul>
                  {categories.CtoM.map(project => (
                    <li key={project._id}><Link className='text-muted text-decoration-none test' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}>{project.projectName}</Link></li>
                  ))}
                </ul>}
            </div>
            <div className="column">
              <h4 className=' text-muted'>N to R</h4>
              {loader ? <Loading /> :
                <ul >
                  {categories.NtoR.map(project => (
                    <li key={project._id}>
                      <Link className='text-muted  text-decoration-none test' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}>{project.projectName}</Link>

                    </li>
                  ))}
                </ul>}
            </div>
            <div className="column">
              <h4 className=' text-muted'>S to Z</h4>
              {loader ? <Loading /> :
                <ul>
                  {categories.StoZ.map(project => (
                    <li key={project._id}><Link className='text-muted text-decoration-none test' onClick={() => handleSendData(project.projectName)} to={`/getPropertiesByProject/${project._id}`}>{project.projectName}</Link></li>
                  ))}
                </ul>}
            </div>
          </div>


        </div>
        <div className=' text-center '>
          <h3 className='fw-bold  text-center text-muted my-4'>Buy By Location</h3>
          <div className="Apps">
            {Object.keys(columns).map(columnKey => (
              <div className="columnn" key={columnKey}>
                <Link className='text-decoration-none' to={`/projectDirection/${columnKey}`}> <h4 className='text-center text-muted'>{columnKey}</h4></Link>
                {loader ? <Loading /> :
                  <ul>
                    {columns[columnKey].map(item => (
                      <li key={item._id}><Link className='text-muted test text-decoration-none' onClick={() => handleLocationData(item.showLocation)} to={`/builderProjectByLocation/${item.showLocation}`}>{item.showLocation}</Link></li>
                    ))}
                  </ul>}
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