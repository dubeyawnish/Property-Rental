import React from 'react'

import { API_BASE_URL } from '../../config';
import { useState ,useEffect } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {


    const {propertyId}=useParams();

    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [requirements, setRequirements] = useState('');
    const [propertyDetails,setPropertyDetails] =useState({});

    const formSubmit = (e) => {
        e.preventDefault();
    
        const reqData = { name, mobileNumber, emailAddress ,requirements};
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
        fetchProperty();
        //debugger;
      }, []);
    
    
    
      const fetchProperty = async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/propertyDetails/${propertyId}`);
          //debugger;
          console.log("Response Data", response.data);
          setPropertyDetails(response.data);
    
          //console.log(properties);
        }
        catch (error) {
          console.error(error);
        }
      }






      const form = useRef();

      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_vyplnzz', 'template_dbeyttu', form.current, '24fN1jM0eumXcxJ50')
          .then((result) => {
              console.log(result.text);
             // console.log("message sent")
          }, (error) => {
              console.log(error.text);
          });
      };





    return (
        <div className='container'>
            <div className='row'>
                <div className='col-lg-8 col-md-8 col-sm-12  '>
                    <h3 className='my-5'>3 BHK Villa Adarsh Palm Meadows, Whitefield</h3>

                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <img src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80' className='img-fluid' alt='' />

                        <h6 className=' fw-bold mt-5'>Overview  {propertyDetails.ownerName}</h6>
                        <div className='d-flex '>
                            <div className='col-lg-3 col-sm-4 p-3 '>
                                <h6 className=''>Updated On:</h6>
                                <h6 className=''>June 30, 2023</h6>
                            </div>
                            <div className='col-lg-3  col-sm-4 p-3 '>
                                <h6 className=''><i className="fa-solid fa-bed"></i></h6>
                                <h6 className=''>3 Bedrooms</h6>
                            </div>
                            <div className='col-lg-3  col-sm-4 p-3' >
                                <h6 className=''><i className="fa-solid fa-map"></i></h6>
                                <h6 className=''>1,520 ft<sup>2</sup></h6>
                            </div>
                        </div>

                    </div>


                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <h6 className='mt-2 fw-bold'>Property Description</h6>
                        <p className='p-3'>PR20465005: A 3BHK Fully-furnished West facing 1520 Sq.ft Villa – Adarsh Palm Meadows Whitefield is available for rent for a price of Rs. 1.2 lakh</p>


                    </div >


                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <h6 className='mt-2 fw-bold'>Property Description</h6>
                        <div className='row'>
                            <div className='col-lg-3  col-sm-4 p-3 '>
                                <h6 >City: Bangalore</h6>
                            </div>
                            <div className='col-lg-3  col-sm-4 p-3 '>
                                <h6>Area: Whitefield</h6>
                            </div>
                            <div className='col-lg-3  col-sm-4 p-3 '>
                                <h6>Country: India</h6>
                            </div>
                        </div>

                    </div>
                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <h6 className='mt-2 fw-bold'>Property Details</h6>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Price: ₹ 1,20,000 per month</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Property Size: 1,520 ft<sup>2</sup></h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Property Lot Size: 1,550 <sup>2</sup></h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Bedrooms: 3</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Property ID: PR20465005</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Monthly Maintenance: 4500</h6>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Security Deposit: 10 months</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Balconies: 2</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Car Parks: 1</h6>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Unit Facing: West</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Flooring: Marble</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Furnishing: Fully Furnished</h6>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Private Garden: Yes</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Private Terrace: Yes</h6>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Modular Kitchen: Yes</h6>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-4 col-md-4 col-sm-12'>
                                <h6 className='mt-2'>Brokerage: 1 month + GST</h6>
                            </div>

                        </div>
                    </div>

                    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                        <h6 className='mt-2 fw-bold'>Property Details</h6>
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

                    </div>

                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 '>
                    <div className='container'>
                        <h3 className='my-5'>₹ 1,20,000 per month</h3>

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
                            <a className='text-decoration-none text-muted fw-bold' href="tel:9945608407"> <i className="fa-solid fa-phone"></i> 9945608407</a> <br/>
                            <a className='text-decoration-none text-muted fw-bold' href="mailto:properties@dharnigroup.com"><i className="fa-regular fa-envelope"></i> properties@dharnigroup.com</a>
                        </div>

                        

                        <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
                            <h6 className='mt-2 fw-bold text-muted text-center'>Share your Requirement</h6>
                            <form  onSubmit={formSubmit}>
                                <div className="mb-3 col-lg-8 ">
                                    <label for="ownername" className="form-label">Name</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} type="text " className="form-control" id="ownername" aria-describedby="emailHelp" required />
                                </div>
                                <div className="mb-3 col-lg-8">
                                    <label for="mobileNumber" className="form-label">Mobile number</label>
                                    <input value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}  type="tel" className="form-control" id="mobileNumber" required />
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