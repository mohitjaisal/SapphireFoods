import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
        A tech based on latest microservice solutions for managing multi-channel ordering. Our brand-wise polygon helps customise reach and scalability of brands independently without any constraint. Our patented machinery and automation allow uniformity and increased efficiency through all.
        </p>
        <div className=" slider__content d-flex align-items-center gap-3 ">
          <img src={"https://www.rebelfoods.com/uploads/slider/9587054111639978392AashiyaKhan.png" || ava02} alt="avatar" className=" rounded" />
          <h6>Aashiya Khan</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          " I learnt to pay more attention to team work and evaluate the strength of a team rather than just an individual."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={"https://www.rebelfoods.com/uploads/slider/4229417271639978458RohitKasbe.png" || ava01} alt="avatar" className=" rounded" />
          <h6>Rohit Kasbe</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          "Communication is the key. Since the time I have Using Sapphire Foods, I see that the company has been moving to a more agile structure and communication between teams team has been ever increasing."
        </p>
        <div className="slider__content d-flex align-items-center gap-3 ">
          <img src={"https://media-exp1.licdn.com/dms/image/C4E03AQF2kKUWZJ05eQ/profile-displayphoto-shrink_400_400/0/1619426207884?e=1672876800&v=beta&t=alR7ifp1-hty0PgDmXG65MYBLKMcfMtWZ_uey_L0Vlc" || ava03} alt="avatar" className=" rounded" />
          <h6>Aman Maurya</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
