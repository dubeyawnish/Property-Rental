import React from 'react'
import Symbol from '../../Images/Logo/logo.jpg'

const Interested = () => {
    return (
        <>
            <div className='container'>
                <div className='row mt-5 ms-5'>

                    <div className=' col-lg-2 col-md-2 col-sm-8'>
                        <img className='img-fluid' src={Symbol} alt='image'></img>

                    </div>
                    <div className=' ms-5 mt-2 col-lg-8 col-md-8 col-sm-12'>
                        <h5 className='fw-bold'> Interested?</h5>
                        <p className='mt-3'><a className='text-decoration-none text-muted ' href="tel:9945608407"><i className="fa-solid fa-phone"></i> 9945608407</a></p>
                        
                        <p className='mt-3 '><a className='text-decoration-none text-muted ' href="mailto:properties@dharnigroup.com"><i className="fa-solid fa-envelope"></i> properties@dharnigroup.com</a></p>
                    </div>

                </div>
                <div className='d-flex'>
                    <a href="mailto:properties@dharnigroup.com">
                        <button type="button" className=" me-2 btn btn-success">Send Email</button></a>
                    <a target='_blank' href="tel:9945608407">
                        <button type="button" className=" me-2 btn btn-success"><i className="fa-solid fa-phone"></i> call +91-9945608407</button></a>
                    <a target='_blank' href="https://wa.me/9945164270?text=Hello!">
                        <button type="button" className="btn btn-success"><i className="fa-brands fa-whatsapp"></i> Whatsapp</button></a>

                </div>


                <h2 className='text-muted mt-5'>About Me</h2>
                <p className='my-5'>Whether you are looking to buy a property or sell, we go that extra mile to make sure you get the best deal matched to your unique requirements, from pre-launches to re-sales, for investment or end use.</p>
                <p>We keep you well informed about all aspects of the property sale, including pros and cons, to help you make a decision with clarity of thought and without scope for regret.</p>

            </div>

        </>
    )
}

export default Interested;