import React from "react";
import './style.css'
import vector from './data/Vector 1.png'
const Home = () => {
    return (
        <>
            <div className="parent">
                <div className="foodTruckIcon"></div>
                <div className="homeHeaderTxt">
                    Discover the <span style={{ color: '#E23744' }}>Best</span> Food and Drinks
                </div>
                <div className="homeSubTxt">
                    Naturally made Healthcare Products for the better care & support of your body.
                </div>
                <button className="exploreBtn">
                    <span className="exploreBtnTxt">
                    Explore Now!
                    </span>
                </button>
                <button className="getInTouch">
                    <span className="getInTouchTxt">
                    Get In Touch
                    </span>
                </button>
                <div className="homeImgLayout">
                    <div className="homeImg">
                    </div>
                    <img className="vector" src={vector} alt="vector"></img>
                </div>

            </div>
        </>
    );
}

export default Home;


