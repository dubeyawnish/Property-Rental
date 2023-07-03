import React from 'react'

const PlotSignup = () => {
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
                        <form >
                            <div className="mb-3">
                                <label for="ownername" className="form-label">Owner Name(s)</label>
                                <input type="email" className="form-control" id="ownername" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label for="mobileNumber" className="form-label">Mobile number(s)</label>
                                <input type="tel" className="form-control" id="mobileNumber" required />
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email address(es)</label>
                                <input type="email" className="form-control" id="email" required />
                            </div>
                            <div className="mb-3">
                                <label for="propertybasics" className="form-label">Property Basics</label>
                                <input type="text" className="form-control" id="propertybasics" required />
                                <div id="emailHelp" className="form-text">Plot Number</div>
                            </div>

                            <input type="text" className="form-control" id="propertybasics" />
                            <div id="emailHelp" className="form-text">Project name (or Address)</div>
                            <div className=' row mt-3'>

                                <div  >
                                    <input type="text" className="form-control" id="propertybasics" />
                                    <div id="emailHelp" className="form-text">Location</div>
                                </div>
                                <div>
                                    <input type="text" className="form-control" id="propertybasics" />
                                    <div id="emailHelp" className="form-text">Direction of plot</div>
                                </div>
                            </div>



                            <div className="mt-5 mb-2">
                                <label for="Propertypricing" className="form-label">Property Pricing</label>
                                <input type="text" className="form-control" id="Propertypricing" required />
                                <div id="emailHelp" className=" form-text">Expected Sale price</div>
                            </div>
                            <input type="text" className="form-control" id="propertybasics" />
                            <div id="emailHelp" className=" mb-2 form-text">Plot Size (sq.ft.)</div>


                            <div className=' row mt-3'>

                                <div className='col-lg-6' >
                                    <input type="text" className="form-control" id="propertybasics" />
                                    <div id="emailHelp" className="form-text">Plot Dimensions</div>
                                </div>
                                <div className='col-lg-6'>
                                    <input type="text" className="form-control" id="propertybasics" />
                                    <div id="emailHelp" className="form-text">Khata Type</div>
                                </div>
                            </div>


                            <label for="details " className=" mt-5 form-label">Additional information, if any</label>
                            <div>
                                <textarea className="form-control" id="details"></textarea>
                            </div>
                            <p className='text-muted fst-italic '>Example: Khata, Key information, Date of availability, etc</p>









                            <div className="mb-5 mt-4 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
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