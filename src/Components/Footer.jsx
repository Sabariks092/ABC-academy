import React from 'react';
import { assets } from '../assets/assets';

export const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="text-center">
                <div className='row d-flex justify-content-center align-items-center mx-auto'>

                    <div className="d-flex flex-column col-md-4 py-3">
                        <h5 className='my-3 mt-4'>Reach us</h5>
                        <div className='mb-3'>
                            <a className='reach-btn' href="" style={{ textDecoration: "none", color: "rgb(255,99,231)" }}>
                                <img width={30} src={assets.WhatsApp} alt="" /> XXXXXXXXXX
                            </a>
                        </div>
                        <div className='mb-4'>
                            <a style={{ textDecoration: "none", color: "rgb(255,99,231)" }} href="">
                                <img src={assets.email} alt="" className='p-1' width={30} style={{ backgroundColor: "white", borderRadius: "15px" }} />
                                <span> XXXXXXXXXX</span>
                            </a>
                        </div>
                    </div>

                    <div className='d-flex flex-column col-md-4 py-3'>
                        <h5 className='my-3'>Follow us</h5>
                        <p>Follow us on social media for more updates</p>
                        <div className="d-flex justify-content-center align-items-center mt-2 gap-3">
                            <a href='https://www.linkedin.com/in/sabarishanmugapriyan-k/'>
                                <img style={{ cursor: "pointer" }} src={assets.linkedIn} alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/Sabariks092?tab=repositories">
                                <img src={assets.github} alt="GitHub" />
                            </a>
                            <a href="https://www.facebook.com/sabari.NS2friends">
                                <img src={assets.facebook_icon} width={23} alt="Facebook" />
                            </a>
                            <a href="https://www.instagram.com/sam.ks_0409/">
                                <img src={assets.instagram_icon} width={30} alt="Instagram" />
                            </a>
                        </div>
                    </div>

                    <div className="d-flex flex-column col-md-4 py-3">
                        <h5 className='mt-3 '>Quick Links</h5>
                        <div >
                            <a style={{ color: "rgb(255,99,231)", textDecoration: "none" }} href="">Home</a><br />
                            <a style={{ color: "rgb(255,99,231)", textDecoration: "none" }} href="#contact">Contact us</a><br />
                            <a style={{ color: "rgb(255,99,231)", textDecoration: "none" }} href="#services">Services</a><br />
                            <a style={{ color: "rgb(255,99,231)", textDecoration: "none" }} href="#courses">Courses</a><br />
                        </div>
                    </div>

                </div>
            </div>

            <hr />
            <div className=' row d-flex justify-content-center w-100  py-3'>
                <div style={{borderRight:"1px solid"}} className=' col-md-6 text-center'>
                    <p style={styles.text}>
                    ©2025 Copyrights Reserved By
                    <a
                        href="#" 
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        <strong> ABC Academy </strong>
                    </a>
                    </p>
                   
                </div>
                <div  style={{borderLeft:"1px solid"}} className=' col-md-6 text-center'>
                    <p style={styles.text}>
                        Designed & Developed by 
                        <a
                        href="https://www.agamcreatives.com/" // Replace with your portfolio URL
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.link}
                    >
                        <strong> Agam Creative Studio</strong>
                    </a>
                    </p>
                    
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#000',
        color: '#fff',
        position: 'relative',
        bottom: 0,
        width: '100%',
        marginTop: 'aut'
    },
    text: {
        margin: 0,
        fontSize: '16px',
    },
    link: {
        color: 'rgb(255,99,231)',
        textDecoration: 'none',
        fontSize: '16px',
    },
};

export default Footer;
