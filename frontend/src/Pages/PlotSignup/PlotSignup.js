import React from 'react'
import { API_BASE_URL } from '../../config';
import { useState } from 'react';
import Swal from 'sweetalert2'
import axios from 'axios';

const PlotSignup = () => {

    const [ownerName, setOwnerName] = useState('');
    const [mobileNumbers, setMobileNumbers] = useState('');
    const [emailAddresses, setEmailAddresses] = useState('');
    const [plotNumber, setPlotNumber] = useState('');
    const [projectName, setProjectName] = useState('');
    const [location, setLocation] = useState('');
    const [direction, setDirection] = useState('');

    const [expectedSalePrice, setExpectedSalePrice] = useState('');
    const [plotSize, setPlotSize] = useState('');
    const [plotDimensions, setPlotDimensions] = useState('');
    const [khataType, setKhataType] = useState('');
    const [additionalInformation, setAdditionalInformation] = useState('');





    const formSubmit = (e) => {
        e.preventDefault();

        const reqData = { ownerName, mobileNumbers, emailAddresses, plotNumber, projectName, location, direction, expectedSalePrice, plotSize, plotDimensions, khataType, additionalInformation };
        axios.post(`${API_BASE_URL}/plotSignup`, reqData)
            .then((result) => {
                if (result.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Successfully Registered'
                    });

                }
                setOwnerName('');
                setMobileNumbers('');
                setEmailAddresses('');
                setPlotNumber('');
                setProjectName('');
                setLocation('');
                setDirection('');
                setExpectedSalePrice('');
                setPlotSize('');
                setPlotDimensions('');
                setKhataType('');
                setAdditionalInformation('');


            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Some error occured plzz try later'
                })

            })

    }







    return (
        <div className='container'>
            <h3 className='text-muted mt-5'>Plot Signup</h3>
            <p className='mt-4'>We request you to please share the below details for us begin working on your property.</p>
            <p>For any issues with the form, please mail us on property@dharnigroup.com</p>

            <div className=' container outer-box '>
                <div className=' list-property-container'>
                    <div className=' upper-div'>
                        <h4>List your Plot with us</h4>
                        <h6>Dharni Property specializes in renting and selling premium homes across Bangalore</h6>
                    </div>
                    <div className='mt-3 p-4'>
                        <form onSubmit={formSubmit} >
                            <div className="mb-3">
                                <label for="ownername" className="form-label">Owner Name(s)</label>
                                <input value={ownerName} onChange={(e) => setOwnerName(e.target.value)} type="text" className="form-control" id="ownername" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label for="mobileNumber" className="form-label">Mobile number(s)</label>
                                <input value={mobileNumbers} onChange={(e) => setMobileNumbers(e.target.value)} type="tel" className="form-control" id="mobileNumber" required />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address(es)</label>
                                <input value={emailAddresses} onChange={(e) => setEmailAddresses(e.target.value)} type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label for="propertybasics" className="form-label">Property Basics</label>
                                <input value={plotNumber} onChange={(e) => setPlotNumber(e.target.value)} type="text" className="form-control" id="propertybasics" required />
                                <div id="emailHelp" className="form-text">Plot Number</div>
                            </div>

                            <input value={projectName} onChange={(e) => setProjectName(e.target.value)} type="text" className="form-control" id="propertybasics" />
                            <div id="emailHelp" className="form-text">Project name (or Address)</div>
                            <div className=' row mt-3'>

                                <div  >
                                    <input value={location} onChange={(e) => setLocation(e.target.value)} type="text" className="form-control" id="propertybasics" />
                                    <div id="emailHelp" className="form-text">Location</div>
                                </div>
                                <div>
                                    <input value={direction} onChange={(e) => setDirection(e.target.value)} type="text" className="form-control" id="propertybasics" />
                                    <div id="emailHelp" className="form-text">Direction of plot</div>
                                </div>
                            </div>



                            <div className="mt-5 mb-2">
                                <label for="Propertypricing" className="form-label">Property Pricing</label>
                                <input value={expectedSalePrice} onChange={(e) => setExpectedSalePrice(e.target.value)} type="text" className="form-control" id="Propertypricing" required />
                                <div id="emailHelp" className=" form-text">Expected Sale price</div>
                            </div>
                            <input value={plotSize} onChange={(e) => setPlotSize(e.target.value)} type="text" className="form-control" id="propertybasics" />
                            <div id="emailHelp" className=" mb-2 form-text">Plot Size (sq.ft.)</div>


                            <div className=' row mt-3'>

                                <div className='col-lg-6' >
                                    <input value={plotDimensions} onChange={(e) => setPlotDimensions(e.target.value)} type="text" className="form-control" id="propertybasics" />
                                    <div id="emailHelp" className="form-text">Plot Dimensions</div>
                                </div>
                                <div className='col-lg-6'>
                                    <input value={khataType} onChange={(e) => setKhataType(e.target.value)} type="text" className="form-control" id="propertybasics" />
                                    <div id="emailHelp" className="form-text">Khata Type</div>
                                </div>
                            </div>


                            <label for="details " className=" mt-5 form-label">Additional information, if any</label>
                            <div>
                                <textarea value={additionalInformation} onChange={(e) => setAdditionalInformation(e.target.value)} className="form-control" id="details"></textarea>
                            </div>
                            <p className='text-muted fst-italic '>Example: Khata, Key information, Date of availability, etc</p>









                            <div className="mb-5 mt-4 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
                                <label className="form-check-label" for="exampleCheck1">I am the owner of the above plot, or authorised to act on behalf of the owner.</label>
                            </div >
                            <div className='d-flex justify-content-center mt-5 mb-5'>
                                <button type="submit" className="btn btn-primary ">Submit</button>
                            </div>




                        </ form >

                    </div>



                </div>
            </div>

        </div>


    )
}

export default PlotSignup;