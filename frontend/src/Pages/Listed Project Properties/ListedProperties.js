import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
import { useLocation } from 'react-router-dom';
import './ListedProperties.css'





const ListedProperties = ({ pr }) => {
  const location = useLocation();

  const { projectId } = useParams();
  //console.log(projectId);
  const [properties, setProperties] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState('2BHK');
  


  //console.log("hello" ,location);
  //console.log("he", pr);

  const PropertyData = {
    '2BHK': [
      {
        propertyType: "2BHK Apartment",
        area: "1000 sq. ft.",
        price: 26600000
      },
      {
        propertyType: "2BHK Villa",
        area: "1200 sq. ft.",
        price: 250000
      }
    ],
    '3BHK': [
      {
        propertyType: "3BHK Apartment",
        area: "1000 sq. ft.",
        price: 200000
      },
      {
        propertyType: "3BHK Villa",
        area: "1200 sq. ft.",
        price: 250000
      }

    ],
    '4BHK': [
      {
        propertyType: "4BHK Apartment",
        area: "1000 sq. ft.",
        price: 200000
      },
      {
        propertyType: "4BHK Villa",
        area: "1200 sq. ft.",
        price: 250000
      }
    ]

  };

  const popers = PropertyData[selectedProperty];


  useEffect(() => {
    setLoader(true)
    fetchProperty();
    //debugger;
  }, []);



  const fetchProperty = async (props) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/getPropertiesByProject/${projectId}`);
      setLoader(false);
      //debugger;
      //console.log("Response Data", response.data)
      setProperties(response.data);

      //console.log(properties);
    }
    catch (error) {
      console.error(error);
    }
  }



  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };
  //console.log(projectId)

  return (
    <div className='  container '>
      {loader ?
        <div className='mb-3 mt-3 col-md-12 text-center'>
          <div className="  spinner-border text-primary" role="status">
            <span className="visually-hidden"></span>
          </div>
        </div>
        : ""}


      <div class="text-center mt-3">

      <a href='https://newprojects.99acres.com/projects/prestige_group/prestige_kew_gardens/images/jngdjz0z.jpg'><img src="https://newprojects.99acres.com/projects/prestige_group/prestige_kew_gardens/images/jngdjz0z.jpg" className='img-size img-fluid rounded' alt="..." /> </a>  
      </div>
      <div className='mt-5'>
        <h3 className='text-muted fw-bold mb-0'>Prestige Kew Garden</h3>
        <p >by <span className='text-color'>Prestige Group</span> </p>
        <a className='text-decoration-none text-muted' href='#'><p className='mt-2'><i class="fa-solid fa-location-dot"></i> Yemalur Main Rd, Yemalur, Bellandur, Bengaluru, Karnataka 560037 <span className='text-color'>(Show on map)</span></p></a>

      </div>

      <div className='mt-5 text-muted'>
        <h3 className=''>Floor Plans</h3>
      </div>




      <div className='ms-0 ps-0 text-color shadow-none p-3 mb-5 bg-body-tertiary rounded d-flex'>
        <h5
          style={{ cursor: 'pointer', margin: '30px', textDecoration: selectedProperty === '2BHK' ? 'underline' : 'none' }}
          onClick={() => handlePropertyClick('2BHK')}
        >
          2BHK
        </h5>
        <h5
          style={{ cursor: 'pointer', margin: '30px', textDecoration: selectedProperty === '3BHK' ? 'underline' : 'none' }}
          onClick={() => handlePropertyClick('3BHK')}
        >
          3BHK
        </h5>
        <h5
          style={{ cursor: 'pointer', margin: '30px', textDecoration: selectedProperty === '4BHK' ? 'underline' : 'none' }}
          onClick={() => handlePropertyClick('4BHK')}
        >
          4BHK
        </h5>
      </div>



      <div>
        {/* <h2>{selectedProperty}</h2> */}

        <div className='shadow-none p-3 mb-5 bg-body-tertiary rounded row'>
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <h4>Floor Layout</h4>

          </div>
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <h4>Area</h4>

          </div>
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <h4>Builder Price</h4>

          </div>
        </div>

        {popers.map((property, index) => (
          <>
            <div className='text-color shadow-none p-3 mb-5 bg-body-tertiary rounded row'>
              <div className='col-lg-4 col-md-4 col-sm-4'>
               <a href='https://im.proptiger.com/2/5276098/12/shantiniketan-floor-plan-floor-plan-100638400.jpeg' > <img src='https://im.proptiger.com/2/5276098/12/shantiniketan-floor-plan-floor-plan-100638400.jpeg ' className='layout-img' /></a>
                

              </div>
              <div className='col-lg-4 col-md-4 col-sm-4'>
                <p>{property.area}</p>

              </div>
              <div className='col-lg-4 col-md-4 col-sm-4'>
                <p>{property.price}</p>

              </div>
            </div>




          </>

        )



        )}




      </div>










      <div className='row mb-2'>
        {properties.map(property => (
          <>

            <h3 className='text-muted my-5'>Properties listed in {property.projectName} </h3>
            <div className='col-lg-3 col-sm-12'>
              <div className="card" >
                <Link to={`/propertyDetails/${property._id}`}>
                  <img src={property.imgUrl}
                    height={250} className="card-img-top " alt="House-iamge" />
                </Link>

                <div className="card-body">
                  <Link className='text-decoration-none' to={`/propertyDetails/${property._id}`}>
                    <h5 className="card-title">{property.bedrooms} BHK {property.villaApartmentNumber} {property.projectName} , {property.location}</h5>
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








        {/* <div className='col-lg-3 col-sm-12 mb-2'>
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