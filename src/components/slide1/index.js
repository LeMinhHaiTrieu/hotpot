
import React, { useEffect } from "react";
import MenuImage from '../../asset/images/menu.png'

function Slide1() {
    return (
        <section className="banner">
            <div
                className="img-menu1"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
            >
                <img src={MenuImage} alt="" />
            </div>
            <div className="img-menu2" data-aos="zoom-in-down" data-aos-duration="1000">
                <img src="https://www.haidilao-inc.com/us/static/img/4.d97ff4af.png" />
            </div>
            <div className="banner-text-image-content">
                <img src="https://www.haidilao-inc.com/us/static/img/zoom_text_en.79730a19.png" alt="sad" className="image" />
            </div>
            <div className="circle hidden sp-in">
                <svg viewBox="0 0 200 200" x="0px" y="0px" className="svg">
                    <path d="M100,0C44.9,0,0,44.9,0,100c0,55.1,44.9,100,100,100c55.1,0,100-44.9,100-100C200,44.9,155.1,0,100,0zM171.9,131.9c-11.7,27.5-37.6,49.6-66.8,60.9c0,0-0.1,0-0.1,0c-0.4,0-0.7-0.3-0.7-0.7c0-0.1,0-0.3,0.1-0.4c4.1-4.9,4.9-13.3-4.3-13.2c-1.7,0-3.4,0-5.1-0.2c-43.3-2.8-76.3-40.1-73.5-83.5c2.8-43.3,40.1-76.3,83.5-73.5c43.3,2.8,76.3,40.1,73.5,83.5C177.9,114.6,175.6,123.6,171.9,131.9z" className="st0"></path>
                </svg>
            </div>
            <span className="circle-line sp1 hidden sp1-in" style={{ borderColor: "rgb(211, 162, 78)" }}></span>
            <span className="circle-line sp2 hidden sp2-in" style={{ borderColor: "rgb(211, 162, 78)" }}></span>
            <span className="circle-line sp3 hidden sp3-in" style={{ borderColor: "rgb(211, 162, 78)" }}></span>
        </section>
    );
}

export default Slide1;