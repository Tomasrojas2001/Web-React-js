import React from "react";
import CardImg1 from "../assets/card-img1.png";
import CardImg2 from "../assets/card-img2.png";
import CardImg3 from "../assets/card-img3.png";
import CardImg4 from "../assets/card-img4.png";
import LiveAuctionCard from "./LiveAuctionCard/LiveAuctionCard";

export default function LiveAuction() {
  const CardList = [
    {
      Image: CardImg1,
      Title: "Fire Thunderbird",
      Price: "43",
      NftId: "9600",
      Time: "1",
    },
    {
      Image: CardImg2,
      Title: "Nature Thunderbird",
      Price: "400",
      NftId: "1240",
      Time: "4",
    },
    {
      Image: CardImg3,
      Title: "Water Thunderbird",
      Price: "200",
      NftId: "2240",
      Time: "3",
    },
    {
      Image: CardImg4,
      Title: "Fire Thunderbird",
      Price: "1000",
      NftId: "4430",
      Time: "2",
    },
  ];

  return (
    <section className="LiveAuction-section" id="LiveAuction">
      <div className="Live-auction-top">
        <h2 className="Live-auction-title">Live Auction</h2>
        <span className="link-market">Explore More</span>
      </div>
      <div className="Live-auction-cards">
        {CardList.map(({ Image, Title, Price, NftId, Time }, index) => (
          <LiveAuctionCard
            Image={Image}
            Title={Title}
            Price={Price}
            Id={NftId}
            Time={Time}
            key={index}
          ></LiveAuctionCard>
        ))}
      </div>
    </section>
  );
}
