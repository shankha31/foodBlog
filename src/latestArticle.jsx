import React, { useState } from "react";
import './style.css'
import Card from "./component/Card";
import { cardData } from "./component/cardData";
const LatestArticle = () => {
    const [pageNo, setPageNo] = useState(1);
    const cardsPerPage = 3;
    const lastIndex = pageNo * cardsPerPage;
    const firstIndec = lastIndex - cardsPerPage;
    const records = cardData.slice(firstIndec, lastIndex);
    const nPage = Math.ceil(cardData.length / cardsPerPage);

    const prevPage = () =>{
        if(pageNo !== 1){
            setPageNo(pageNo-1);
        }
    }
    const nextPage = () =>{
        if(pageNo !== nPage){
            setPageNo(pageNo+1);
        }
    }
    return (
        <>
            <div className="latestArticleParent">
                <div className="latestArticleCard">
                    <div className="latestArticleCardHeader">Latest Articles</div>
                    <div className="cardsContainer">
                        {records.map((currCard) => {
                            return (
                                <Card
                                    image={currCard.image}
                                    header={currCard.header}
                                    content={currCard.content}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="pagenationParent">
                <button className={`prevPageBtn ${pageNo === 1 ? 'disabled':''}`} onClick={prevPage} >&lt;</button>
                <div className="pagenationTxt">{pageNo}/{nPage}</div>
                <button className={`nextPageBtn ${pageNo === nPage ? 'disabled':''}`} onClick={nextPage}>&gt;</button>
                </div>
                
            </div>
        </>
    );
}

export default LatestArticle;