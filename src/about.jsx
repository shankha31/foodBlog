import React from "react";
import './style.css'
const About = () => {
    return (
        <>
            <div className="aboutParent">
                <div className="aboutUsCard">
                    <div className="aboutUsImg"></div>
                    <div className="aboutUsContentParent">
                        <div className="aboutUsHeader">About Us</div>
                        <div className="aboutUsContent">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            t has survived not only five centuries.
                        </div>
                        <button className="readMoreBtn">
                            <span className="readMoreBtnTxt">
                                Read More
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;