import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../config';





const ListedProperties = () => {
  const { locationId } = useParams();
  //console.log(projectId);
  const [properties, setProperties] = useState([]);
  //const [loader, setLoader] = useState(false);




  useEffect(() => {
    //setLoader(true);
    fetchProperty();
    //debugger;
  }, []);



  const fetchProperty = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getPropertiesByLocation/${locationId}`);
      //debugger;
      //console.log("Response Data", response.data)
      setProperties(response.data);
      //setLoader(false);

      //console.log(properties);
    }
    catch (error) {
      console.error(error);
    }

  }

  //console.log(projectId)

  return (
    <div className='  container '>
      {/* {loader ?
        <div className='mb-3 mt-3 col-md-12 text-center'>
          <div className="  spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
        : ""} */}

      <div className='row mb-2'>
        {properties.map(property => (
          <>
            <h3 className='text-muted my-5'>Properties listed in {property.location} sales</h3>

            <div className='col-lg-3 col-sm-12'>
              <div className="card" >
                <Link to={`/propertyDetails/${property._id}`}>
                  <img src={property.imgUrl} height={250}
                    className="card-img-top " alt="House-iamge" />
                </Link>

                <div className="card-body">
                  <Link className='text-decoration-none' to={`/propertyDetails/${property._id}`}>
                    <h5 className="card-title">{property.bedrooms} BHK {property.villaApartmentNumber} {property.projectName} {property.location}</h5>
                  </Link>
                  <h5 className="card-title">₹ {property.expectedSalePrice} </h5>
                  <p className="card-text"> {property.additionalInformation} ...</p>
                  <p><i className="fa-solid fa-bed"></i> {property.bedrooms} &nbsp; &nbsp;<span > <i className="fa-solid fa-droplet "></i> {property.bathrooms} &nbsp; &nbsp;</span> <span className=''><i className="fa-solid fa-map"></i>{property.builtUpArea} ft<sup>2</sup></span> </p>
                  <p className='text-center'><Link to='/interested' className='text-muted text-decoration-none'><i class="fa-sharp fa-regular fa-face-smile"></i> Interested?</Link></p>
                </div>
              </div>
            </div>
          </>
        ))}






        {/* 
        <div className='col-lg-3 col-sm-12 mb-2'>
          <div className="card" style={{ width: '20rem' }}>
            <Link to='/propertyDetails'>
              <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="House-iamge" />
            </Link>
            <div className="card-body">
              <Link className='text-decoration-none' to='/propertyDetails'>
                <h5 className="card-title">3 BHK Villa Adarsh Palm Meadows, Whitefield</h5>
              </Link>

              <h5 className="card-title ">₹ 1,20,000 per month</h5>
              <p className="card-text">PR20465005: A 3BHK Fully-furnished West facing 1520 Sq.ft Villa – Adarsh Palm Meadow ...</p>
              <p><i className="fa-solid fa-bed"></i> 3 &nbsp; &nbsp;<span > <i className="fa-solid fa-droplet"></i> 3 &nbsp; &nbsp;</span> <span className=''><i className="fa-solid fa-map"></i>1520 ft<sup>2</sup></span> </p>
              <p className='text-center'><Link to='/interested' className='text-muted text-decoration-none'>Interested?</Link></p>
            </div>
          </div>
        </div>




        <div className='col-lg-3 col-sm-12'>
          <div className="card" style={{ width: '20rem' }}>
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="House-iamge" />
            <div className="card-body">
              <h5 className="card-title">3 BHK Villa Adarsh Palm Meadows, Whitefield</h5>
              <h5 className="card-title">₹ 1,20,000 per month</h5>
              <p className="card-text">PR20465005: A 3BHK Fully-furnished West facing 1520 Sq.ft Villa – Adarsh Palm Meadow ...</p>
              <p><i className="fa-solid fa-bed"></i> 3 &nbsp; &nbsp;<span > <i className="fa-solid fa-droplet "></i> 3 &nbsp; &nbsp;</span> <span className=''><i className="fa-solid fa-map"></i>1520 ft<sup>2</sup></span> </p>
              <p className='text-center'><a href='' className='text-muted text-decoration-none'>Interested?</a></p>
            </div>
          </div>
        </div>



        <div className='col-lg-3 col-sm-12'>
          <div className="card" style={{ width: '20rem' }}>
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="House-iamge" />
            <div className="card-body">
              <h5 className="card-title">3 BHK Villa Adarsh Palm Meadows, Whitefield</h5>
              <h5 className="card-title">₹ 1,20,000 per month</h5>
              <p className="card-text">PR20465005: A 3BHK Fully-furnished West facing 1520 Sq.ft Villa – Adarsh Palm Meadow ...</p>
              <p><i className="fa-solid fa-bed"></i> 3 &nbsp; &nbsp;<span > <i className="fa-solid fa-droplet"></i> 3 &nbsp; &nbsp;</span> <span className=''><i className="fa-solid fa-map"></i>1520 ft<sup>2</sup></span> </p>
              <p className='text-center'><a href='' className='text-muted text-decoration-none'>Interested?</a></p>
            </div>
          </div>
        </div>



        <div className='col-lg-3 col-sm-12'>
          <div className="card" style={{ width: '20rem' }}>
            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="House-iamge" />
            <div className="card-body">
              <h5 className="card-title">3 BHK Villa Adarsh Palm Meadows, Whitefield</h5>
              <h5 className="card-title">₹ 1,20,000 per month</h5>
              <p className="card-text">PR20465005: A 3BHK Fully-furnished West facing 1520 Sq.ft Villa – Adarsh Palm Meadow ...</p>
              <p><i className="fa-solid fa-bed"></i> 3 &nbsp; &nbsp;<span > <i className="fa-solid fa-droplet"></i> 3 &nbsp; &nbsp;</span> <span className=''><i className="fa-solid fa-map"></i>1520 ft<sup>2</sup></span> </p>
              <p className='text-center'><a href='' className='text-muted text-decoration-none'>Interested?</a></p>
            </div>
          </div>
        </div> */}
      </div>

    </div>
  )
}

export default ListedProperties;