import React from 'react'
import '../Components/Services.css'
export const Services = () => {
    return (
        <div>
            <div className='my-5 text-center'>
                <h3 className='text-center my-3'>Our Services</h3>
                <p className='w-75 text-center mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit est voluptatibus reiciendis consectetur illo, autem eligendi optio suscipit quaerat numquam iste cumque modi, laudantium corrupti nihil excepturi eum cum?</p>
            </div>
            <div  className="row mb-5 d-flex mx-auto gap-2 justify-content-center text-center">
                <div style={{boxShadow:"2px 2px 8px black"}} className="col-md-3 p-4 rounded-3 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <img className='rounded-3 mb-2' src="src/assets/course.webp" height={100} alt="" />
                            <h5 className="card-title">Short Courses</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-dark"> Request Call Demo</a>
                        </div>
                    </div>
                </div>
                <div style={{boxShadow:"2px 2px 8px black"}} className="col-md-3 p-4 rounded-3 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <img className='rounded-3 mb-2' src="src/assets/course.webp" height={100} alt="" />
                            <h5 className="card-title">Online Degrees</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-dark"> Request Call Demo</a>
                        </div>
                    </div>

                </div>
                <div style={{boxShadow:"2px 2px 8px black"}} className="col-md-3 p-4 rounded-3 mb-3 mb-sm-0">
                    <div  className="card">
                        <div className="card-body">
                            <img className='rounded-3 mb-2' src="src/assets/course.webp" height={100} alt="" />
                            <h5 className="card-title">Web Experts</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-dark"> Request Call Demo</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mt-4' />
        </div>
    )
}
