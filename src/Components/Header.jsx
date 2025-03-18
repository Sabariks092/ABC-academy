import React from 'react';
import "../assets/course.webp"
import "../assets/Banner.png"
import "../Components/header.css"
export const Header = () => {
    return (
        <>
            <div className='header '>
                <div className='container d-flex my-auto align-items-center text-white text-center p-3'>
                    <div className='my-3 row  justify-content-center'>
                        <h2 className=' text-white text-center'><strong>We Are Here to Tranform Your Goals into Real</strong></h2>
                        <p style={{width:"70%"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta cum dolorem laudantium iure corrupti voluptate, earum sit itaque ex repellendus <br /> voluptates necessitatibus vel eius quaerat, voluptatibus laborum quis quidem.</p>
                    <div>
                    <button className='course-btn mb-3'> Our Courses</button>
                    </div>
                    <div>
                    <a className='demo-btn mt-4 px-4' href=""> Book a Demo</a>

                    </div>
                    </div>
                </div>
            </div>
            
            <hr />

        </>
    )
}
