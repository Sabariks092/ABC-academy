import React from 'react'
import '../Components/Services.css'
export const Services = () => {
    return (
        <div>
            <div className='my-5 text-center'>
                <h3 className='text-center my-3'>Our Services</h3>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit est voluptatibus reiciendis consectetur illo, autem eligendi optio suscipit quaerat numquam iste cumque modi, laudantium corrupti nihil excepturi eum cum?</p>
            </div>
            <div className="row mb-5 d-flex justify-content-center text-center">
                <div className="col-md-4 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <img className='rounded-3 mb-2' src="src/assets/course.webp" height={100} alt="" />
                            <h5 className="card-title">Short Courses</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-dark"> Request Call Demo</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <img className='rounded-3 mb-2' src="src/assets/course.webp" height={100} alt="" />
                            <h5 className="card-title">Online Degrees</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-dark"> Request Call Demo</a>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <img className='rounded-3 mb-2' src="src/assets/course.webp" height={100} alt="" />
                            <h5 className="card-title">Web Experts</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-dark"> Request Call Demo</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr />
        </div>
    )
}
