import React from 'react';
import memberImage1 from "../assets/memberImage1.png";
import memberImage2 from "../assets/memberImage2.png";
import memberImage3 from "../assets/memberImage3.png";
import memberImage4 from "../assets/memberImage4.png";
import memberImage5 from "../assets/memberImage5.png";
import TeamCard from './TeamCard/TeamCard';

const Team = () => {
  const TeamList = [
    {
        image: memberImage1,
        nickname:"Elite Leader",
        name:"Matias",
        role:"Co-Founder & Project manager"
    },
    {
        image: memberImage2,
        nickname:"Elite healer",
        name:"David",
        role:"Legendary artist"
    },
    {
        image: memberImage3,
        nickname:"Elite wizard",
        name:"Lucas",
        role:"Developer"
    },
    {
        image: memberImage4,
        nickname:"Elite guard",
        name:"Tomas",
        role:"Investor & advisor"
    },
    {
        image: memberImage5,
        nickname:"Elite soldier",
        name:"Nelson",
        role:"Co-Founder & Community leader"
    },
]
  return (
    <section className='team-section' id='team'>
        <h1 className='team-title'>Team</h1>
        <div className="team-container">
            {TeamList.map(({image,nickname,name,role},index)=> <TeamCard image={image} nickname={nickname} name={name} role={role} key={index}></TeamCard>)}
        </div>
    </section>
  )
}

export default Team;