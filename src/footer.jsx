import React from "react";
import './style.css';
import instaIcon from './data/Path 3.png';
import twiterIcon from './data/Path 2.png';
import facebookIcon from './data/Path 1.png';
const Footer = () => {
    return (
        <>
            <div className="footerParent">
                <div className="footerIcon"></div>
                <div className="contactUs">
                    <div className="contactUsHeader">Contact Us</div>
                    <ul className="contactUsFeilds">
                        <li>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</li>
                        <li>example2020@gmail.com</li>
                        <li>(904) 443-0343</li>
                    </ul>
                </div>
                <div className="more">
                    <div className="moreHeader">More</div>
                    <ul className="moreFeilds">
                        <li>About Us</li>
                        <li>Products</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="socialLinks">
                    <div className="socialLinksHeader">Social Links</div>
                    <ul className="socialLinksFeilds">
                        <li><img className="socialIconPic" src={instaIcon} alt="instaIcon" /></li>
                        <li><img className="socialIconPic" src={twiterIcon} alt="twiterIcon" /></li>
                        <li><img className="socialIconPic" src={facebookIcon} alt="facebookIcon" /></li>
                    </ul>
                </div>
                <div className="copyRight">© 2022 Food Truck Example</div>
            </div>
        </>
    );
}

export default Footer;


