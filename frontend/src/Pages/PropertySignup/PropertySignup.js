import React from 'react'
import './PropertySignup.css'

const PropertySignup = () => {
  return (
    <>
      <div className='container'>
        <h3 className='text-muted'>Property Signup</h3>
        <p className='mt-4'>We request you to please share the below details for us begin working on your property.</p>
        <p>For any issues with the form, please mail us on property@dharnigroup.com</p>
        <div className=' container outer-box '>
          <div className=' list-property-container'>
            <div className=' upper-div'>
              <h4>List your Property with us</h4>
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
                  <div id="emailHelp" className="form-text">Unit Number</div>
                </div>



                <input type="text" className="form-control" id="propertybasics" />
                <div id="emailHelp" className="form-text">Project name (or Address)</div>
                <div className=' row mt-3'>

                  <div className='col-lg-6' >
                    <input type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">Location</div>
                  </div>
                  <div className='col-lg-6'>
                    <input type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">Year of Completion</div>
                  </div>
                </div>

                <div className="mt-5 mb-2">
                  <label for="Propertypricing" className="form-label">Property Pricing</label>
                  <input type="text" className="form-control" id="Propertypricing" required />
                  <div id="emailHelp" className=" form-text">Expected Rent price (if applicable)</div>
                </div>
                <input type="text" className="form-control" id="propertybasics" />
                <div id="emailHelp" className=" mb-2 form-text">Expected Sale price (if applicable)</div>


                <div className=' row mt-3'>

                  <div className='col-lg-6' >
                    <input type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">Monthly maintenance</div>
                  </div>
                  <div className='col-lg-6'>
                    <input type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">Built up (sq.ft.)</div>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <input type="text" className="form-control" id="propertybasics" />
                  <div id="emailHelp" className="form-text">Plot size (sq.ft.)</div>
                </div>


                <div className="mt-5 mb-2">
                  <label for="PropertyOverview " className="form-label">Property Overview </label>
                  <input type="text" className="form-control" id="PropertyOverview " required />
                  <div id="emailHelp" className=" form-text">No. of bedrooms</div>
                </div>
                <input type="text" className="form-control" id="propertybasics" />
                <div id="emailHelp" className=" mb-2 form-text">No. of bathrooms</div>


                <div className=' row mt-3'>

                  <div className='col-lg-6' >
                    <input type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">No. of balconies</div>
                  </div>
                  <div className='col-lg-6'>
                    <input type="text" className="form-control" id="propertybasics" />
                    <div id="emailHelp" className="form-text">No. of car parks</div>
                  </div>
                </div>

                <div className='col-lg-6'>
                  <input type="text" className="form-control" id="propertybasics" />
                  <div id="emailHelp" className="form-text">Direction of main door</div>
                </div>


                <label for="propertyfeatures " className=" mt-5 form-label">Property Features </label>
                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="studyroom" value='studyroom' />
                    <label className=" me-4 form-check-label" for="studyroom">Study Room</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="maidroom" value='maidroom' />
                    <label className=" me-4 form-check-label" for="maidroom">Maid's Room</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="maidtoilet" value='maidtoilet' />
                    <label className=" me-4 form-check-label" for="maidtoilet">Maid's Toilet</label>

                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="privatepool" value='privatepool' />
                    <label className=" me-4 form-check-label" for="privatepool">Private Pool</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="privategarden" value='privategarden' />
                    <label className=" me-4 form-check-label" for="privategarden">Private Garden</label>
                  </div>

                </div>
                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="privateterrace" value='privateterrace' />
                    <label className=" me-4 form-check-label" for="privateterrace">Private Terrace</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="hometheatre" value='hometheatre' />
                    <label className=" me-4 form-check-label" for="hometheatre">Home Theatre Room</label>
                  </div>

                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="mediaroom" value='mediaroom' />
                    <label className=" me-4 form-check-label" for="mediaroom">Media Room</label>
                  </div>

                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="modulerkitchen" value='modulerkitchen' />
                    <label className=" me-4 form-check-label" for="modulerkitchen">Modular Kitchen</label>
                  </div>


                </div>

                <label for="furnishingdetails " className=" mt-5 form-label">Furnishing Details </label>
                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="aircondition" value='aircondition' />
                    <label className=" me-4 form-check-label" for="aircondition">Air conditioner</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="bed" value='bed' />
                    <label className=" me-4 form-check-label" for="bed">Bed</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="chimney" value='chimney' />
                    <label className=" me-4 form-check-label" for="chimney">Chimney</label>

                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="curtains" value='curtains' />
                    <label className=" me-4 form-check-label" for="curtains">Curtains</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="diningtable" value='diningtable' />
                    <label className=" me-4 form-check-label" for="diningtable">Dining Table</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="dishwasher" value='dishwasher' />
                    <label className=" me-4 form-check-label" for="dishwasher">Dishwasher</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="dryer" value='dryer' />
                    <label className=" me-4 form-check-label" for="dryer">Dryer</label>
                  </div>

                </div>


                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="geyser" value='geyser' />
                    <label className=" me-4 form-check-label" for="geyser">Geyser</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="hob" value='hob' />
                    <label className=" me-4 form-check-label" for="hob">Hob</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="mattress" value='mattress' />
                    <label className=" me-4 form-check-label" for="mattress">Mattress</label>

                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="microwave" value='microwave' />
                    <label className=" me-4 form-check-label" for="microwave">Microwave</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="oven" value='oven' />
                    <label className=" me-4 form-check-label" for="oven">Oven</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="refrigerator" value='refrigerator' />
                    <label className=" me-4 form-check-label" for="refrigerator">Refrigerator</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="sofa" value='sofa' />
                    <label className=" me-4 form-check-label" for="sofa">Sofa Set</label>
                  </div>

                </div>


                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="solarheater" value='solarheater' />
                    <label className=" me-4 form-check-label" for="solarheater">Solar Heater</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="tv" value='tv' />
                    <label className=" me-4 form-check-label" for="tv">TV</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="wardrobe" value='wardrobe' />
                    <label className=" me-4 form-check-label" for="wardrobe">Wardrobe</label>

                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="washingmachine" value='washingmachine' />
                    <label className=" me-4 form-check-label" for="washingmachine">Washing Machine</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="waterpurifier" value='waterpurifier' />
                    <label className=" me-4 form-check-label" for="waterpurifier">Water Purifier</label>
                  </div>


                </div>


                <label for="flooringtype " className=" mt-5 form-label">Flooring Type </label>

                <div className='d-flex'>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="granite" value='Granite' />
                    <label className=" me-4 form-check-label" for="granite">Granite</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="italianmarble" value='Italian Marble' />
                    <label className=" me-4 form-check-label" for="italianmarble">Italian Marble</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="kotastone" value='Kota Stone' />
                    <label className=" me-4 form-check-label" for="kotastone">Kota Stone</label>

                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="marble" value='Marble' />
                    <label className=" me-4 form-check-label" for="marble">Marble</label>
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="tiles" value='Tiles' />
                    <label className=" me-4 form-check-label" for="tiles">Tiles</label>
                  </div>

                  <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="wood" value='Wood' />
                    <label className=" me-4 form-check-label" for="wood">Wood</label>
                  </div>


                </div>

                <label for="details " className=" mt-5 form-label">Additional information, if any</label>
                <div>
                  <textarea class="form-control" id="details"></textarea>
                </div>
                <p className='text-muted fst-italic '>Example: Khata, Key information, Date of availability, etc</p>









                <div className="mb-5 mt-4 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" for="exampleCheck1">I am the owner of the above property, or authorised to act on behalf of the owner.</label>
                </div >
                <div className='d-flex justify-content-center mt-5 mb-5'>
                  <button type="submit" className="btn btn-primary ">Submit</button>
                </div>
              </form>

            </div>

          </div>
        </div>

      </div>

    </>
  )
}

export default PropertySignup;