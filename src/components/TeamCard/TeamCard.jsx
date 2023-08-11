import React from 'react';
import { BsTwitter } from "react-icons/bs";

const TeamCard = ({image,nickname,name,role}) => {

  return (
    <div className='team-card'>
        <img src={image} alt="" className="team-img" />
        <div className="team-desc">
            <p className='member member-nickname'>{nickname}</p>
            <h1 className='member-name'>{name}</h1>
            <p className='member member-role'>{role}</p>
        </div>
        <a href="#" className='twitter-card'><BsTwitter></BsTwitter></a>
    </div>
  )
}

export default TeamCard