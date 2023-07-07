import React from 'react'

const Interested = () => {
    return (
        <>
            <div className='container'>
                <div className='row mt-5 ms-5'>

                    <div className=' col-lg-2 col-md-2 col-sm-8'>
                        <img className='img-fluid' src='https://www.dharnigroup.com/wp-content/uploads/2021/10/cropped-Logo-on-for-Dilwai-27-Oct-2019-1-1.jpg' alt='image'></img>

                    </div>
                    <div className=' ms-5 mt-2 col-lg-8 col-md-8 col-sm-12'>
                        <h5 className='fw-bold'> Interested?</h5>
                        <p className='mt-3'><a className='text-decoration-none text-muted ' href="tel:9453416152"><i className="fa-solid fa-phone"></i> 1234567890</a></p>
                        <p className='mt-3 '><a className='text-decoration-none text-muted ' href="tel:9453416152"><i className="fa-solid fa-mobile"></i> 123467890</a></p>
                        <p className='mt-3 '><a className='text-decoration-none text-muted ' href="mailto:dubeyawnish6@gmail.com"><i className="fa-solid fa-envelope"></i> dharniproperty@gmail.com</a></p>
                    </div>

                </div>
                <div className='d-flex'>
                    <a href="mailto:dubeyawnish6@gmail.com">
                        <button type="button" className=" me-2 btn btn-success">Send Email</button></a>
                    <a target='_blank' href="tel:9453416152">
                        <button type="button" className=" me-2 btn btn-success"><i className="fa-solid fa-phone"></i> call +91-1234567890</button></a>
                    <a target='_blank' href="https://wa.me/9453416152?text=Hello!">
                        <button type="button" className="btn btn-success"><i class="fa-brands fa-whatsapp"></i> Whatsapp</button></a>

                </div>


                <h2 className='text-muted mt-5'>About Me</h2>
                <p className='my-5'>Whether you are looking to buy a property or sell, we go that extra mile to make sure you get the best deal matched to your unique requirements, from pre-launches to re-sales, for investment or end use.</p>
                <p>We keep you well informed about all aspects of the property sale, including pros and cons, to help you make a decision with clarity of thought and without scope for regret.</p>

            </div>

        </>
    )
}

export default Interested;