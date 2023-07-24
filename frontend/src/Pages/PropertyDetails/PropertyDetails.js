import React from 'react'

import { API_BASE_URL } from '../../config';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useParams } from 'react-router-dom';
import Map from '../DetailsMap/Map.js'








const PropertyDetails = () => {




    const { propertyId } = useParams();

    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [requirements, setRequirements] = useState('');
    const [propertyDetails, setPropertyDetails] = useState({});
    const [loader,setLoader] =useState(false);

    const formSubmit = (e) => {
        e.preventDefault();

        const reqData = { name, mobileNumber, emailAddress, requirements };
        axios.post(`${API_BASE_URL}/requirement`, reqData)
            .then((result) => {
                if (result.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Requirement Send Successfully'
                    });

                }
                setName('');
                setMobileNumber('');
                setEmailAddress('');
                setRequirements('');


            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occured plzz try later'
                })

            })

    }






    useEffect(() => {
        setLoader(true);
        const fetchProperty = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/propertyDetails/${propertyId}`);
                setLoader(false);
                //debugger;
                //console.log("Response Data", response.data);
                setPropertyDetails(response.data);


                //console.log(properties);
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchProperty();
        //debugger;
    }, []);
















    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_vyplnzz', 'template_dbeyttu', form.current, '24fN1jM0eumXcxJ50')
            .then((result) => {
                // console.log(result.text);
                // console.log("message sent")
            }, (error) => {
                console.log(error.text);
            });
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
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-12  '>
                    <h3 className='my-5'>{propertyDetails.bedrooms} BHK {propertyDetails.villaApartmentNumber} {propertyDetails.projectName}, {propertyDetails.location}</h3>

                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <img src={propertyDetails.imgUrl} className='img-fluid' alt='' />

                        <h6 className=' fw-bold mt-5'>Overview  {propertyDetails.ownerName}</h6>
                        <div className='d-flex '>
                            <div className='col-lg-3 col-sm-4 p-3 '>
                                <h6 className=''>Updated On:</h6>
                                <h6 className=''>Jully 17, 2023</h6>
                            </div>
                            <div className='col-lg-3  col-sm-4 p-3 '>
                                <h6 className=''><i className="fa-solid fa-bed"></i></h6>
                                <h6 className=''>{propertyDetails.bedrooms} bedroom</h6>
                            </div>
                            <div className='col-lg-3  col-sm-4 p-3' >
                                <h6 className=''><i className="fa-solid fa-map"></i></h6>
                                <h6 className=''>{propertyDetails.builtUpArea} ft<sup>2</sup></h6>
                            </div>
                        </div>

                    </div>


                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <h6 className='mt-2 fw-bold'>Property Description</h6>
                        <p className='p-3'>{propertyDetails.additionalInformation}</p>








                    </div >


                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <h6 className='mt-2 fw-bold'>Property Description</h6>
                        <div className='row'>
                            <div className='col-lg-3  col-sm-4 p-3 '>
                                <h6 >City: Bangalore</h6>
                            </div>
                            <div className='col-lg-3  col-sm-4 p-3 '>
                                <h6>Area: {propertyDetails.location}</h6>
                            </div>
                            <div className='col-lg-3  col-sm-4 p-3 '>
                                <h6>Country: India</h6>
                            </div>
                        </div>

                    </div>
                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <h6 className='mt-2 fw-bold'>Property Details</h6>
                        <div className='row'>
                            {propertyDetails.expectedSalePrice ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Price: ₹ {propertyDetails.expectedSalePrice}</h6>
                            </div> : ""}
                            {propertyDetails.builtUpArea ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Property Size: {propertyDetails.builtUpArea} ft<sup>2</sup></h6>
                            </div> : ""}
                            {propertyDetails.plotSize ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Property Plot Size: {propertyDetails.builtUpArea}ft <sup>2</sup></h6>
                            </div> : ""}

                            {propertyDetails.bedrooms ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Bedrooms: {propertyDetails.bedrooms}</h6>
                            </div> : ""}
                            {propertyDetails.bathrooms ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Bathrooms: {propertyDetails.bathrooms}</h6>
                            </div> : ""}
                            {/* {propertyDetails._id? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Property ID: {propertyDetails._id}</h6>
                            </div> :""} */}
                            {propertyDetails.monthlyMaintenance ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Monthly Maintenance: {propertyDetails.monthlyMaintenance}</h6>
                            </div> : ""}

                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Security Deposit: 10 months</h6>
                            </div>
                            {propertyDetails.balcony ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Balconies: {propertyDetails.balcony}</h6>
                            </div> : ""}
                            {propertyDetails.carParks ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Car Parks: {propertyDetails.carParks}</h6>
                            </div> : ""}

                            {propertyDetails.mainDoorDirection ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Unit Facing: {propertyDetails.mainDoorDirection}</h6>
                            </div> : ""}
                            {/* {propertyDetails.marble ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Flooring: Marble</h6>
                            </div> : ""} */}
                            {/* <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Furnishing: Fully Furnished</h6>
                            </div> */}

                            {propertyDetails.studyRoom ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Study Room: Yes</h6>
                            </div> : ""}
                            {propertyDetails.maidsRoom ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Maid's Room: Yes</h6>
                            </div> : ""}
                            {propertyDetails.maidsToilet ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Maid's Toilet: Yes</h6>
                            </div> : ""}


                            {propertyDetails.privateGarden ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Private Garden: Yes</h6>
                            </div> : ""}
                            {propertyDetails.privateTerrace ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Private Terrace: Yes</h6>
                            </div> : ""}
                            {propertyDetails.privatePool ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Private Pool: Yes</h6>
                            </div> : ""}
                            {propertyDetails.homeTheatreRoom ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Home Theatre Room: Yes</h6>
                            </div> : ""}
                            {propertyDetails.mediaRoom ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Media Room: Yes</h6>
                            </div> : ""}

                        </div>

                        {/* <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Brokerage: 1 month + GST</h6>
                            </div>

                        </div> */}
                    </div>

                    {/* <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <h6 className='mt-2 fw-bold'>Furnishing Details</h6>
                        <h6 className='mt-3 fw-bold'>Amenities</h6>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '><i className=" fa-solid fa-check"></i>&nbsp; Badminton Court</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'><i className="fa-solid fa-check"></i>&nbsp; Basketball Court</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'><i className="fa-solid fa-check"></i>&nbsp; Children Play Area </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '><i className=" fa-solid fa-check"></i>&nbsp; Club House</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'><i className="fa-solid fa-check"></i>&nbsp; Gated Community</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'><i className="fa-solid fa-check"></i>&nbsp; Gymnasium </h6>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '><i className=" fa-solid fa-check"></i>&nbsp; Heated Swimming Pool</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'><i className="fa-solid fa-check"></i>&nbsp;  Power Backup</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'><i className="fa-solid fa-check"></i>&nbsp; Restaurant </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '><i className=" fa-solid fa-check"></i>&nbsp; Squash Court</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'><i className="fa-solid fa-check"></i>&nbsp;  Supermarket</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'><i className="fa-solid fa-check"></i>&nbsp; Swimming Pool </h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '><i className=" fa-solid fa-check"></i>&nbsp; Table Tennis</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'><i className="fa-solid fa-check"></i>&nbsp;  Tennis Court</h6>
                            </div>

                        </div>

                    </div>  */}







                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <h6 className='mt-2 fw-bold'>Furnishing Details</h6>

                        <div className='row'>
                            {propertyDetails.airConditioner ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Air conditioner: Yes</h6>
                            </div> : ""}

                            {propertyDetails.bed ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Bed: Yes</h6>
                            </div> : ""}
                            {propertyDetails.chimney ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Chimney: Yes</h6>
                            </div> : ""}
                            {propertyDetails.curtains ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Curtains: Yes</h6>
                            </div> : ""}
                            {propertyDetails.diningTable ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Dining Table: Yes</h6>
                            </div> : ""}
                            {propertyDetails.modularKitchen ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Modular Kitchen: Yes</h6>
                            </div> : ""}
                            {propertyDetails.dishwasher ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Dishwasher: Yes</h6>
                            </div> : ""}

                            {propertyDetails.dryer ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Dryer: Yes</h6>
                            </div> : ""}
                            {propertyDetails.geyser ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Geyser: Yes</h6>
                            </div> : ""}
                            {propertyDetails.hob ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Hob: Yes</h6>
                            </div> : ""}
                            {propertyDetails.mattress ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Mattress: Yes</h6>
                            </div> : ""}
                            {propertyDetails.microwave ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Microwave: Yes</h6>
                            </div> : ""}
                            {propertyDetails.oven ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Oven: Yes</h6>
                            </div> : ""}
                            {propertyDetails.refrigerator ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Refrigerator: Yes</h6>
                            </div> : ""}
                            {propertyDetails.sofaSet ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Sofa Set: Yes</h6>
                            </div> : ""}
                            {propertyDetails.solarHeater ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Solar Heater: Yes</h6>
                            </div> : ""}
                            {propertyDetails.tv ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>TV: Yes</h6>
                            </div> : ""}
                            {propertyDetails.wardrobe ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Wardrobe: Yes</h6>
                            </div> : ""}
                            {propertyDetails.washingMachine ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>washing Machine: Yes</h6>
                            </div> : ""}
                            {propertyDetails.waterPurifier ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Water Purifier: Yes</h6>
                            </div> : ""}
                            {propertyDetails.granite ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Flooring: {propertyDetails.granite}</h6>
                            </div> : ""}
                            {propertyDetails.italianMarble ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Flooring: {propertyDetails.italianMarble}</h6>
                            </div> : ""}
                            {propertyDetails.kotaStone ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Flooring: {propertyDetails.kotaStone}</h6>
                            </div> : ""}
                            {propertyDetails.marble ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Flooring: {propertyDetails.marble}</h6>
                            </div> : ""}
                            {propertyDetails.tiles ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Flooring: {propertyDetails.tiles}</h6>
                            </div> : ""}
                            {propertyDetails.wood ? <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2 '>Flooring: {propertyDetails.wood}</h6>
                            </div> : ""}

                        </div>

                    </div>



                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <h6 className='mt-2 fw-bold'>Map</h6>


                        <Map latitude={propertyDetails.latitude ? propertyDetails.latitude : "12.9481"} longitude={propertyDetails.longitude ? propertyDetails.longitude : "77.6780"} />



                    </div>


                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 '>
                    <div className='container'>
                        <h3 className='my-5'>₹{propertyDetails.expectedSalePrice}</h3>

                        <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                            <h6 className='mt-2 fw-bold text-muted text-center'>Interested?</h6>
                            <p className=' fw-bold '>Schedule a showing?</p>
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="mb-3 col-lg-12 ">

                                    <input type="date" name='user_date' placeholder='day' className="form-control" id="date" aria-describedby="emailHelp" required />
                                    <input type="time" name='user_time' placeholder='time' className=" mt-3 form-control" id="time" aria-describedby="emailHelp" required />
                                    <input type="text" name='user_name' placeholder='Your Name' className=" mt-3 form-control" id="date" aria-describedby="emailHelp" required />
                                    <input type="text" name='user_email' placeholder='Your Email' className=" mt-3 form-control" id="date" aria-describedby="emailHelp" required />
                                    <input type="tel" name='user_mobileno' placeholder='Your Number' className=" mt-3 form-control" id="date" aria-describedby="emailHelp" required />

                                    <div className=' mt-3 '>
                                        <button type="submit" value='send' className=" form-control btn btn-primary ">Send Email</button>
                                    </div>

                                </div>
                            </form>
                            <div className='d-flex'>
                                <div className='  me-2 col-6'>
                                    <a href="tel:9945608407">

                                        <button type="submit" className=" form-control btn btn-secondary "><i className="fa-solid fa-phone"></i> Call</button></a>
                                </div>
                                <div className='  col-6'>
                                    <a href="https://wa.me/9945608407?text=Hello!">
                                        <button type="submit" className=" form-control btn btn-secondary "><i className="fa-brands fa-whatsapp"></i> Whatsapp</button> </a>
                                </div>
                            </div>
                        </div>

                        <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                            <h6 className='mt-2 fw-bold text-muted text-center'>Contact Us</h6>
                            <a className='text-decoration-none text-muted fw-bold' href="tel:9945608407"> <i className="fa-solid fa-phone"></i> 9945608407</a> <br />
                            <a className='text-decoration-none text-muted fw-bold' href="mailto:properties@dharnigroup.com"><i className="fa-regular fa-envelope"></i> properties@dharnigroup.com</a>
                        </div>



                        <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                            <h6 className='mt-2 fw-bold text-muted text-center'>Share your Requirement</h6>
                            <form onSubmit={formSubmit}>
                                <div className="mb-3 col-lg-8 ">
                                    <label for="ownername" className="form-label">Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text " className="form-control" id="ownername" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3 col-lg-8">
                                    <label for="mobileNumber" className="form-label">Mobile number</label>
                                    <input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} type="tel" className="form-control" id="mobileNumber" required />
                                </div>
                                <div className="mb-3 col-lg-8">
                                    <label for="email" className="form-label">Email address</label>
                                    <input value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} type="email" className="form-control" id="email" required />
                                </div>


                                <label for="details " className="  form-label">Requirement</label>
                                <div className='col-lg-8'>
                                    <textarea value={requirements} onChange={(e) => setRequirements(e.target.value)} className="form-control " id="details"></textarea>
                                </div>


                                <div className=' mt-5 '>
                                    <button type="submit" className="btn btn-primary ">Submit</button>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default PropertyDetails;