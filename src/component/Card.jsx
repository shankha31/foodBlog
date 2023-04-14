import React from "react";
import '../style.css';

const Card = ({image,header,content}) => {
    return (
        <>

                    <div className="cardStructure">
                        <div className="cardImg">
                            <img src={image} alt="poster" className="cardImageOrig"></img>
                        </div>
                        <div className="cardContent">
                            <div className="cardHeaderTxt">{header}</div>
                            <div className="cardContentTxt">{content}</div>
                            <button className="cardBtn">
                                <span className="cardBtnTxt">
                                    Read More
                                </span>
                            </button>
                        </div>
                    </div>
        </>
    )
}
export default Card;