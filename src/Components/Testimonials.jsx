import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../Components/testimonials.css"

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: 'John Doe',
        title: 'CEO, Tech Innovations',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        testimonial: 'Working with this team was a game-changer for our project. Their dedication and expertise exceeded our expectations. Highly recommended!',
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'Marketing Manager, Creative Co.',
        image: 'https://randomuser.me/api/portraits/women/2.jpg',
        testimonial: 'Amazing service and attention to detail. They understood our needs and delivered a fantastic solution. Truly professional!',
    },
    {
        id: 3,
        name: 'Alex Johnson',
        title: 'Product Owner, NextGen Apps',
        image: 'https://randomuser.me/api/portraits/men/3.jpg',
        testimonial: 'Impressed with the level of creativity and technical skills demonstrated throughout the project. Outstanding results!',
    },
    {
        id: 4,
        name: 'Emily Davis',
        title: 'Lead Developer, CodeCraft',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
        testimonial: 'Fantastic collaboration and a great outcome. The project was delivered on time with flawless execution. Will definitely work with them again!',
    },
    {
        id: 5,
        name: 'Chris Walker',
        title: 'CTO, Innovate Labs',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        testimonial: 'Their approach to problem-solving is impressive. They have an eye for detail and deliver quality work every time!',
    },
];

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "inline-block", right: "-25px" }}
            onClick={onClick}
        />
    );
};

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "-25px" }}
            onClick={onClick}
        />
    );
};

export const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    

    return (
        <div className='row d-flex align-items-center justify-content-center'>
            <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
            <p className='text-center w-75 mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quidem sint repudiandae architecto cupiditate in nulla error aliquam velit asperiores. Omnis quibusdam veritatis soluta error eaque ipsum, optio reiciendis a!</p>
            <div className="col-md-10" >
                <Slider {...settings}>
                    {testimonials.map((testimonial) => (
                        <div className='col-md-3'>
                            <div key={testimonial.id} style={{boxShadow:"10px 10px 40px black", borderRadius:"20px"}} className=" p-4 bg-white shadow-lg m-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-20 h-20 rounded-3 mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-center">{testimonial.name}</h3>
                                <p className="text-gray-600 text-center">{testimonial.title}</p>
                                <p className="mt-3 text-gray-700 text-center">"{testimonial.testimonial}"</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <hr className='mt-5'/>
        </div>
    );
};
