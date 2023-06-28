import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='container '>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12 '>
                    <div className='mt-5 footer-center  '>
                        <h6 className=' text-cen fw-bold '>Contact Us</h6>
                    </div>
                    <div className='mt-3 footer-center text-muted '>

                        <p><i className="me-1 fa-solid fa-envelope "></i>dharniproperties@gmail.com</p>
                        <p><i className="me-1 fa-solid fa-phone"></i>1234567890</p>

                    </div>

                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 footer-center '>
                    <div className='mt-5  '>
                        <h6 className=' text-cen fw-bold'>Follow us on Facebook</h6>
                    </div>
                    <div className='mt-3 d-flex '>
                        <div>
                            <a href='/'><img className='border border-secondary' src='https://www.dharnigroup.com/wp-content/uploads/2021/10/cropped-Logo-on-for-Dilwai-27-Oct-2019-1-1.jpg' height='50' width='50'></img></a>
                        </div>
                        <div className='ms-1'>
                            <div>
                                <a style={{ textDecoration: 'none' }} href='/' className=''>Dharni Property </a>
                            </div>
                            <div>
                                <a style={{ textDecoration: 'none' }} href='/' className='text-muted'> <i className="fa-brands fa-square-facebook"></i> Follow Page </a>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 footer-center '>
                    <div className='mt-5  mb-3'>
                        <h6 className=' text-cen fw-bold'>Stay Connected</h6>
                    </div>
                    <div className=' mt-4 d-flex align-items-center '>

                        <a className='' target='_blank' href=''><i className=" me-3 fa-brands fa-google"></i></a>
                        <a target='_blank' href=''><i className="mx-3 fa-brands fa-facebook"></i></a>
                        <a target='_blank' href=''><i className=" mx-3 fa-brands fa-instagram"></i></a>
                        <a target='_blank' href=''><i className="mx-3 fa-brands fa-linkedin"></i></a>
                        <a target='_blank' href=''><i className="mx-3  fa-brands fa-twitter"></i></a>



                    </div>

                </div>

            </div>
            <div className=' mt-5' style={{ minHeight: '4rem' }}>
                <h6 className='text-dark fw-4 text-center fw-bold'>Copyright © 2023 Dharni Property. All rights reserved</h6>


            </div>
        </div>
    )
}

export default Footer;