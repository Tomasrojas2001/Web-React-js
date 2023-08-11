import React, { useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50%;
  height: max-content;
`;


const Wrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
  text-align: center;
  cursor: pointer;
  padding: 2rem;
  &::after {
    content: "";
    height: 1px;
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6923144257703081) 50%, rgba(255, 255, 255, 0) 100% );
    position: absolute;
    width: 100%;
    z-index: 3;
    bottom: 0;
    left: 0;
}
  h1 {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .icon-faq{
      svg{
        stroke: #fff;
      }
    }
`;

const Dropdown = styled.div`

color:#fff;
width: 100%;
height: max-content;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
position: relative;
&::after {
    content: "";
    height: 1px;
    background: linear-gradient( 90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6923144257703081) 50%, rgba(255, 255, 255, 0) 100% );
    position: absolute;
    width: 100%;
    z-index: 3;
    bottom: 0;
    left: 0;
}
p{
  font-size: 1.3rem;
  height: max-content;
  white-space: pre-wrap;
  padding: 10px;
}`;

export function Faqs() {
  const FaqsData = [
    {
      question: "When was the mint?",
      answer: "October 11th, 11PM UTC. We sold out in 10 mins!",
    },
    {
      question: "What was the mint price?",
      answer: "October 11th, 11PM UTC. We sold out in 10 mins!",
    },
    {
      question: "How many Elite there are?",
      answer: "There are a total of 9999 Elites",
    },
    {
      question: "What is the utility? Is there anything other than the art?",
      answer: "YES! Absolutely. Please check out our full Roadmap. Here are a few highlights:\n1.EliteBucks Token, earning and staking.\n2.Metaverse with P2E (Play to Earn) game,  in-game upgrades, and more.\n3.Elite Incubator, helping smaller projects get started in exchange for benefits to our Club members.\nView our full Roadmap"
    },
    {
      question: "What is EliteBucks ($EBS)?",
      answer: `EliteBucks ($EBS) is the in-game currency powering the game economy.
      Players can get $MBS by buying it on DEXs, opening loot boxes, completing missions,winning PVP battles`,
    },
    {
      question: "On what blockchain is the project built on?",
      answer: `Elite Group are proud to live on the Solana blockchain.`,
    },
    {
      question: "Who is the team behind it?",
      answer: `You can read more about it on the Team section. In summary, we are experienced professionals with high standards and a love for doing things right. We hope to exceed all your expectations!`,
    },
  ];

  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  return (
    <section className="faqs-section" id="faqs">
      <h2 className="faqs-title">FAQS</h2>
      <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
        <AccordionSection>
            {FaqsData.map((item, index) => {
              return (
                <>
                  <Wrap onClick={() => toggle(index)} key={index}>
                    <h1>{item.question}</h1>
                    <span className="icon-faq">{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </Wrap>
                  {clicked === index ? (
                    <Dropdown>
                      <p>{item.answer}</p>
                    </Dropdown>
                  ) : null}
                </>
              );
            })}
        </AccordionSection>
      </IconContext.Provider>
    </section>
  );
}
