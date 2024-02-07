import React from 'react'
import './Footer.css'
import Symbol from  '../../Images/Logo/symbol.jpg'

const Footer = () => {
    return (
        <div className='container '>
            <div className='row'>
                <div className='col-lg-4 col-md-4 col-sm-12 '>
                    <div className='mt-5 footer-center  '>
                        <h6 className=' text-cen fw-bold '>Contact Us</h6>
                    </div>
                    <div className='mt-3 footer-center text-muted '>

                        <p><a className='text-decoration-none text-muted ' href="mailto:properties@dharnigroup.com"><i className="me-1 fa-solid fa-envelope "></i>properties@dharnigroup.com </a></p>
                        <p><a className='text-decoration-none text-muted ' href="tel:9945608407"><i className="me-1 fa-solid fa-phone"></i>9945608407</a></p>

                    </div>

                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 footer-center '>
                    <div className='mt-5  '>
                        <h6 className=' text-cen fw-bold'>Follow us on Facebook</h6>
                    </div>
                    <div className='mt-3 d-flex '>
                        <div>
                            <a href='https://www.facebook.com/dharnigroup'><img className='border border-secondary' src={Symbol} height='50' width='50'></img></a>
                        </div>
                        <div className='ms-1'>
                            <div>
                                <a style={{ textDecoration: 'none' }} href='https://www.facebook.com/dharnigroup' className=''>Dharni Properties </a>
                            </div>
                            <div>
                                <a style={{ textDecoration: 'none' }} href='https://www.facebook.com/dharnigroup' className='text-muted'> <i className="fa-brands fa-square-facebook"></i> Follow Page </a>
                            </div>

                        </div>


                    </div>

                </div>
                <div className='col-lg-4 col-md-4 col-sm-12 footer-center '>
                    <div className='mt-5  mb-3'>
                        <h6 className=' text-cen fw-bold'>Stay Connected</h6>
                    </div>
                    <div className=' mt-4 d-flex align-items-center '>

                        <a className='' target='_blank' href='https://www.google.com/maps/place/DHARNI+Capital/@12.993086,77.702896,21z/data=!4m14!1m7!3m6!1s0x3bae119f0e352d3f:0x86ca1ae2e0e0d66a!2sDHARNI+Capital!8m2!3d12.9930625!4d77.7028941!16s%2Fg%2F11g6vfghmh!3m5!1s0x3bae119f0e352d3f:0x86ca1ae2e0e0d66a!8m2!3d12.9930625!4d77.7028941!16s%2Fg%2F11g6vfghmh?hl=en-US&entry=ttu'><i className=" me-3 fa-brands fa-google"></i></a>
                        <a target='_blank' href='https://www.facebook.com/dharnigroup'><i className="mx-3 fa-brands fa-facebook"></i></a>
                        {/* <a target='_blank' href=''><i className=" mx-3 fa-brands fa-instagram"></i></a> */}
                        <a target='_blank' href='https://www.linkedin.com/company/dharni-group/about/'><i className="mx-3 fa-brands fa-linkedin"></i></a>
                        <a target='_blank' href='https://twitter.com/DHARNIgroup'><i className="mx-3  fa-brands fa-twitter"></i></a>
                    </div>

                </div>

            </div>
            <div className=' mt-5' style={{ minHeight: '4rem' }}>
                <p className='text-dark  text-center fw-bold'>Copyright © {new Date().getFullYear()} Dharni Capital Services Limited. All rights reserved</p>


            </div>
        </div>
    )
}

export default Footer;