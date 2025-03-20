import React from 'react';
import "../assets/Banner.png"
import "../Components/header.css"
export const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='container gap-3 d-flex my-auto align-items-center text-white text-center  p-3'>
                    <div className='my-3 row  justify-content-center'>
                        <h2 className=' text-white text-center mb-3'><strong>We Are Here to Tranform Your Goals into Real</strong></h2>
                        <p style={{ width: "70%",marginBottom:"30px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut dicta cum dolorem laudantium iure corrupti voluptate, earum sit itaque ex repellendus </p>
                        <div className='mb-4'>
                            <a className='demo-btn  text-white mt-4 px-4' style={{backgroundColor:"rgb(255,99,231)"}} href="#courses"> Our Courses</a>
                        </div>
                        <div className='mt-2'>
                            <a className='demo-btn btn-dark mt-5 px-4' style={{backgroundColor:"white"}} href="#contact"> Book a Demo</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mt-4' />

        </>
    )
}
