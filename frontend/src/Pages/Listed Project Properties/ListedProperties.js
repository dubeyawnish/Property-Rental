import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
//import { useLocation } from 'react-router-dom';
import './ListedProperties.css'





const ListedProperties = ({ pr }) => {
  //const location = useLocation();

  const { projectId } = useParams();
  //console.log(projectId);
  const [properties, setProperties] = useState([]);
  const [loader, setLoader] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState('2BHK');
  const [projectDetail, setProjectDetail] = useState({});



  //console.log("hello" ,location);
  //console.log("he", pr);





  useEffect(() => {
    setLoader(true)
    fetchProjectDetail();
    fetchProperty();
    //debugger;
  }, []);

  const fetchProjectDetail = async () => {
    const projectName = localStorage.getItem('ProjectName');
    const reqData = { projectName };
    try {
      const res = await axios.post(`${API_BASE_URL}/getProjectDetail`, reqData);
      //console.log(res.data);
      setProjectDetail(res.data);
      //console.log("projejctDetail",projectDetail);

    }
    catch (error) {
      console.error(error);
    }
  }



  const fetchProperty = async (props) => {
    try {

      const response = await axios.get(`${API_BASE_URL}/getPropertiesByProject/${projectId}`);
      setLoader(false);
      //debugger;
      //console.log("Response Data", response.data)
      setProperties(response.data);

      //console.log("propes",properties);
    }
    catch (error) {
      console.error(error);
    }
  }
  // console.log("Mama",projectDetail.twoBHK)
  // let data=projectDetail.twoBHK

  const PropertyData = {
    '2BHK': projectDetail.twoBHK,
    '3BHK': projectDetail.threeBHK,
    '4BHK': projectDetail.fourBHK

  };

  //console.log("Mama",projectDetail.twoBHK)

  const popers = PropertyData[selectedProperty];




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
      <div className=' text-center mt-5'>
        <h3 className='text-muted fw-bold mb-0'>{projectDetail.projectName}</h3>
        <p >by <span className='text-color'>Prestige Group</span> </p>
        <a className='text-decoration-none text-muted' href='#'><p className='mt-2'><i class="fa-solid fa-location-dot"></i> Yemalur Main Rd, Yemalur, Bellandur, Bengaluru, Karnataka 560037 <span className='text-color'>(Show on map)</span></p></a>

      </div>

      <div className='mt-5 text-muted'>
        <h3 className=''>Overview</h3>

        <div className='row  '>
          <div className='col-md-3 col-lg-3 col-sm-6'>
            <h5 className='mt-3'>Nov'11</h5>
            <p className='mt-0 fs-6'>Profession start date</p>
          </div>

          <div className='col-md-3 col-lg-3 col-sm-6'>
            <h5 className='mt-3'>Completed</h5>
            <p className='mt-0 fs-6'>Status</p>
          </div>
          <div className='col-md-3 col-lg-3 col-sm-6'>
            <h5 className='mt-3'>2997</h5>
            <p className='mt-0 fs-6'>Total Launched apartments</p>
          </div>
          <div className='col-md-3 col-lg-3 col-sm-12'>
            <h5 className='mt-3'>Sep'06</h5>
            <p className='mt-0 fs-6'>Launch Date</p>
          </div>
          <div className='col-md-3 col-lg-3 col-sm-12'>
            <h5 className='mt-3'>Resale</h5>
            <p className='mt-0 fs-6'>Availability</p>
          </div>

        </div>
      </div>


      <div className='mt-5 text-muted'>
        <h3 className=''>{projectDetail.projectName} Floor Plans</h3>
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

        {popers && popers.map((property, index) => (
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

      <div className='mt-5 text-muted'>
        <h3 className=''>Amenities</h3>
        <div className='row mb-2  mt-3'>
           <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
            <h4 className='text-color'><i class="fa-solid fa-dumbbell"></i></h4>
            <p >Gymnasium</p>
           </div>

           <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
            <h4 className='text-color'><i class="fa-solid fa-person-swimming"></i></h4>
            <p >Swimming Pool</p>
           </div>

           <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
            <h4 className='text-color'><i class="fa-solid fa-chess"></i></h4>
            <p >Children's play area</p>
           </div>

           <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
            <h4 className='text-color'><i class="fa-solid fa-person-running"></i></h4>
            <p >Jogging Track</p>

           </div>

           <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
            <h4 className='text-color'><i class="fa-solid fa-table-tennis-paddle-ball"></i></h4>
            <p >Tennis Court</p>
           </div>
           <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
            <h4 className='text-color'><i class="fa-regular fa-credit-card"></i></h4>
            <p >ATM</p>
           </div>
          

           <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
            <h4 className='text-color'><i class="fa-solid fa-book"></i></h4>
            <p >Library</p>
           </div>



        </div>
      </div>






      <h3 className='text-muted my-5'>Properties listed in {localStorage.getItem('ProjectName')} </h3>



      <div className='row mb-2'>
        {properties.map(property => (
          <>


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