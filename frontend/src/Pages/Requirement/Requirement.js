import React from 'react'

const Requirement = () => {
    return (
        <div className='container mt-5'>
            <h3 className='text-muted'>Share Your Requirement</h3>
            <p className='mt-4'>Tell us what kind of a home you have in mind. We will be happy to share a customized list of recommended homes, with actual pictures and verified details.</p>
            <p>For any issues with the form, please mail us on property@dharnigroup.com</p>

            <div className='mt-3 p-4'>
                <form >
                    <div className="mb-3">
                        <label for="ownername" className="form-label">Name</label>
                        <input type="email" className="form-control" id="ownername" aria-describedby="emailHelp" required />
                    </div>
                    <div className="mb-3">
                        <label for="mobileNumber" className="form-label">Mobile number</label>
                        <input type="tel" className="form-control" id="mobileNumber" required />
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" required />
                    </div>


                    <label for="details " className="  form-label">Requirement</label>
                    <div>
                        <textarea class="form-control" id="details"></textarea>
                    </div>


                    <div className='d-flex justify-content-center mt-5 mb-5'>
                        <button type="submit" className="btn btn-primary ">Submit</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Requirement;