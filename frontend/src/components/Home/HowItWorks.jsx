import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {  SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./arrow.css";
import "./Testimonial.css";
import { useState } from "react";

const settings = {
  arrows: true, 
  speed: 800,
  slidesToShow: 3,
  slidesToScroll: 1,
  swipeToSlide: true,
  autoplay: true,
      autoplaySpeed: 2000,
    className: 'react__slick__slider__parent',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const data = [
  {
    id: 1,
    name: "ABC",
    title: "Data Engineer Intern at Amazon",
    description:"",
    image:"https://shorturl.at/OQeBe"
  },
  {
    id: 2,
    name: "ABC",
    title: "BackEnd Developer Intern at HackerEarth",
    description:"",
    image:"https://shorturl.at/OQeBe"
  },
  {
    id: 3,
    name: "ABC",
    title: "R&D Intern at VMware",
    description:"",
    image:"https://shorturl.at/OQeBe"
  },
  {
    id: 4,
    name: "ABC",
    title: "Software Engineering Intern at Fivetran",
    description:"",
    image: "https://shorturl.at/OQeBe"
  },
  {
    id: 5,
    name: "ABC",
    title: "SD Intern at Bank of New York Mellon",
    description:"",
    image: "https://shorturl.at/OQeBe"
  },
  {
    id: 6,
    name: "ABC",
    title: "Power Programmer at Infosys",
    description:"",
    image: "https://shorturl.at/OQeBe"
  },
  {
    id: 7,
    name: "ABC",
    title: "Software Engineering Intern at Fivetran",
    description:"",
    image:"https://shorturl.at/OQeBe"
   },
  {
    id: 8,
    name: "ABC",
    title: "Software Engineering Intern at Fivetran",
    description:"",
    image: "https://shorturl.at/OQeBe"
  },
  {
    id: 9,
    name: "ABC",
    title: "R&D intern at VMware",
    description:
      "",
    image: "https://shorturl.at/OQeBe"
  },
  {
    id: 10,
    name: "ABC",
    title: "Data Science",
    description:
      "",
    image: "https://shorturl.at/OQeBe"
  },
];
const HowItWorks = () => {
  const [trim, setTrim] = useState(true);

  return (
      <>
        <div>
      <section className="testimonial-section">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
            <span className="section-separator"></span>
            \
          </div>
        </div>
        <div className="testimonials-carousel-wrap">
    
          <div className="testimonials-carousel">
            <div className="swiper-container">
              <div className="swiper-wrapper"></div>

              <Slider {...settings}>
                {data.map((testimonial) => (
                  <SwiperSlide className="swiper-slide" key={testimonial.id}>
                  
                    <div className="testi-item">
                      <div className="testi-avatar">
                        <img src={testimonial.image} />
                      </div>
                      <div className="testimonials-text-before">
                        <i className="fa fa-quote-right"></i>
                      </div>
                      <div className="testimonials-text">
                        <div className="listing-rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <p>
                     {     trim &&
                        testimonial.description.substring(0,250) ||  testimonial.description}
                        
                        <button onClick={()=>setTrim(!trim)} style={{borderRadius:"4px ", padding:" 0 2px", fontFamily:"sans-serif", opacity:"0.6",textDecoration:"underline", border:"none"}}>{trim && `See more` || `See less`}</button>
                        
                        </p>
                        
                        <div className="testimonials-avatar">
                          {/* <a href="#" className="text-link">in</a> */}
                          <h3>{testimonial.name}</h3>  
                          
                          <h4>{testimonial.title}</h4>
                        </div>
                        
                      </div>
                      <div className="testimonials-text-after">
                        <i className="fa fa-quote-left"></i>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Slider>     </div>
            <div className="tc-pagination"></div>
          </div>
        </div>
    
      </section>
    </div>
      </>
  );
};

export default HowItWorks;
