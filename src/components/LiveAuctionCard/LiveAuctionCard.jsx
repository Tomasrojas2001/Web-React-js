import React from "react";
import ETHlogo from "../../assets/supereth.png";
const LiveAuctionCard = ({ Image, Title, Price, Id, Time }) => {
  return (
    <div className="nft-card">
      <div className="card-img">
        <img src={Image} alt="" />
      </div>
      <div className="card-content">
        <div className="card-heading">
          <h5 className="card-series">Elite Group</h5>
          <span className="card-top">Top Bid</span>
        </div>
        <div className="card-details">
          <h4 className="card-title">{Title}</h4>
          <div className="card-price">
            <img src={ETHlogo} alt="" />
            <h4>{Price} ETH</h4>
          </div>
        </div>
        <div className="card-sub-details">
          <span>#{Id}</span>
          <span>{Time} day left</span>
        </div>
      </div>
    </div>
  );
};

export default LiveAuctionCard;
