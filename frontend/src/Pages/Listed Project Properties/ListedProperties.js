import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../../config';
//import { useLocation } from 'react-router-dom';
import './ListedProperties.css'
import ImageModal from '../ImageModel/imageModel.js';





const ListedProperties = () => {
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

      console.log("propes", properties);
    }
    catch (error) {
      console.error(error);
    }
  }
  // console.log("Mama",projectDetail.twoBHK)
  // let data=projectDetail.twoBHK

  const PropertyData = {
    '1BHK':projectDetail.oneBHK,
    '1.5BHK':projectDetail.oneFiveBHK,
    '2BHK':projectDetail.twoBHK,
    '2.5BHK': projectDetail.twoFiveBHK,
    '3BHK': projectDetail.threeBHK,
    '3.5BHK':projectDetail.threeFiveBHKBHK,
    '4BHK': projectDetail.fourBHK

  };

  //console.log("Mama",projectDetail.twoBHK)

  const popers = PropertyData[selectedProperty];




  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };
  //console.log(projectId)










  const [rowsToShow, setRowsToShow] = useState(1);
  const [showAll, setShowAll] = useState(false);


  const handleShowMore = () => {

    setShowAll(true);
  };


  const handleShowLess = () => {

    setShowAll(false);
  };






  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };
   
 // console.log(projectDetail.projectLocation);


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

        <img onClick={() => handleImageClick(projectDetail.projectImg)}
          style={{ cursor: 'pointer' }} src={projectDetail.projectImg} className='img-size img-fluid rounded' alt="Project Image" />

        {selectedImage && <ImageModal className='' imageUrl={selectedImage} onClose={() => setSelectedImage(null)} />}
      </div>
      <div className=' text-center mt-5'>
        <h3 className='text-muted fw-bold mb-0'>{projectDetail.projectName}</h3>
        <p >by <span className='text-color'>Prestige Group</span> </p>
        <a className='text-decoration-none text-muted' href={projectDetail.projectLocation}><p className='mt-2'><i class="fa-solid fa-location-dot"></i> Yemalur Main Rd, Yemalur, Bellandur, Bengaluru, Karnataka 560037 <span className='text-color'>(Show on map)</span></p></a>

      </div>

      <div className='mt-5 text-muted textCeter'>
        <h3 className='fw-bold'>Overview</h3>

        <div className='row '>
          <div className='col-md-3 col-lg-3 col-sm-6  textCeter'>
            <h5 className='mt-3'>Nov'11</h5>
            <p className='mt-0 fs-6'>Possession start date</p>
          </div>

          <div className='col-md-3 col-lg-3 col-sm-6 textCeter'>
            <h5 className='mt-3'>Completed</h5>
            <p className='mt-0 fs-6'>Status</p>
          </div>
          <div className='col-md-3 col-lg-3 col-sm-6 textCeter'>
            <h5 className='mt-3'>2997</h5>
            <p className='mt-0 fs-6'>Total Launched apartments</p>
          </div>
          <div className='col-md-3 col-lg-3 col-sm-12 textCeter'>
            <h5 className='mt-3'>Sep'06</h5>
            <p className='mt-0 fs-6'>Launch Date</p>
          </div>
          <div className='col-md-3 col-lg-3 col-sm-12 textCeter'>
            <h5 className='mt-3'>Resale</h5>
            <p className='mt-0 fs-6'>Availability</p>
          </div>

        </div>
      </div>


      <div className='mt-5 text-muted'>
        <h3 className='fw-bold'>{projectDetail.projectName} Floor Plans</h3>
      </div>




      <div className=' text-color shadow-none p-3  bg-body-tertiary rounded d-flex'>
      {projectDetail.oneBHK && projectDetail.oneBHK.length>0 ?<h5
          style={{ cursor: 'pointer', margin: '30px', textDecoration: selectedProperty === '1BHK' ? 'underline' : 'none' }}
          onClick={() => handlePropertyClick('1BHK')}
        >
          1BHK
        </h5>:""}
       {projectDetail.oneFiveBHK && projectDetail.oneFiveBHK.length>0 ? <h5
          style={{ cursor: 'pointer', margin: '30px', textDecoration: selectedProperty === '1.5BHK' ? 'underline' : 'none' }}
          onClick={() => handlePropertyClick('1.5BHK')}
        >
          1.5BHK
        </h5>:""}

       {projectDetail.twoBHK && projectDetail.twoBHK.length>0? <h5
          style={{ cursor: 'pointer', margin: '30px', textDecoration: selectedProperty === '2BHK' ? 'underline' : 'none' }}
          onClick={() => handlePropertyClick('2BHK')}
        >
          2BHK
        </h5> :""}
        {projectDetail.twoFiveBHK && projectDetail.twoFiveBHK.length>0 ?<h5
          style={{ cursor: 'pointer', margin: '30px', textDecoration: selectedProperty === '2.5BHK' ? 'underline' : 'none' }}
          onClick={() => handlePropertyClick('2.5BHK')}
        >
          2.5BHK
        </h5>:""}
       {projectDetail.threeBHK && projectDetail.threeBHK.length>0? <h5
          style={{ cursor: 'pointer', margin: '30px', textDecoration: selectedProperty === '3BHK' ? 'underline' : 'none' }}
          onClick={() => handlePropertyClick('3BHK')}
        >
          3BHK
        </h5>:""}
       {projectDetail.threeFiveBHK && projectDetail.threeFiveBHK.length>0? <h5
          style={{ cursor: 'pointer', margin: '30px', textDecoration: selectedProperty === '3.5BHK' ? 'underline' : 'none' }}
          onClick={() => handlePropertyClick('3.5BHK')}
        >
          3.5BHK
        </h5>:""}
        {projectDetail.fourBHK && projectDetail.fourBHK.length>0?<h5
          style={{ cursor: 'pointer', margin: '30px', textDecoration: selectedProperty === '4BHK' ? 'underline' : 'none' }}
          onClick={() => handlePropertyClick('4BHK')}
        >
          4BHK
        </h5>:""}
      </div>



      <div>
        {/* <h2>{selectedProperty}</h2> */}

        <div className='shadow-none p-3  bg-body-tertiary rounded d-flex dis '>
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <h4 className='font-sizes'>Floor Layout</h4>

          </div>
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <h4 className='font-sizes'>Area</h4>

          </div>
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <h4 className='font-sizes'>Builder Price</h4>

          </div>
        </div>

        {popers && popers.slice(0, showAll ? popers.length : rowsToShow).map((property, index) => (
          <>
            <div className=' shadow-none p-3  bg-body-tertiary rounded d-flex dis'>
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
        <div className='text-center mt-2'>
          {!showAll && popers && popers.length > rowsToShow && (
            <button className='btn btn-primary btnCol' onClick={handleShowMore}>Show More</button>
          )}


          {showAll && (
            <button className='btn btn-primary btnCol' onClick={handleShowLess}>Show Less</button>
          )}


        </div>




      </div>

      <div className='mt-5 text-muted textCenter'>
        <h3 className=''>Amenities</h3>
      </div>
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

        <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
          <h4 className='text-color'><i class="fa-solid fa-house-medical-flag"></i></h4>
          <p >Hospital</p>
        </div>

        <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
          <h4 className='text-color'><i class="fa-solid fa-user-group"></i></h4>
          <p >Community Hall</p>
        </div>

        <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
          <h4 className='text-color'><i class="fa-solid fa-person-shelter"></i></h4>
          <p >Staff Quarter</p>
        </div>

        <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
          <h4 className='text-color'><i class="fa-solid fa-wifi"></i></h4>
          <p >Internet/Wi-Fi</p>
        </div>

        <div className='col-lg-2 col-md-2 col-sm-6 text-center'>
          <h4 className='text-color'><i class="fa-solid fa-faucet-drip"></i></h4>
          <p >24X7 Water Supply</p>
        </div>


      </div>






      {properties.length > 0 ? <div>
        <h3 className='text-muted my-5'>Properties listed in {localStorage.getItem('ProjectName')} </h3>
        <div className='row mb-2'>
          {properties.map(property => (

            <>
              {property.bedrooms ? <div className='col-lg-3 col-sm-12'>
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
              </div> : ""}
            </>
          ))}
        </div>
      </div> : ""}
    </div>
  )
}

export default ListedProperties;