import React from "react";
import logo from "../assets/EliteGroupIcon.png";
import { HashLink as Link } from "react-router-hash-link";
import { BsTwitter, BsDiscord } from "react-icons/bs";

export default function Nav() {
  const socialMedias = [<BsDiscord></BsDiscord>, <BsTwitter></BsTwitter>];
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <a href="./" className="pulsar">
            <img src={logo} alt="Elite Infinity" className="logo-icon" />
          </a>
        </div>
        <nav className="menu" >
          <ul className="menu-items">
            <li className="menu-item">
              <Link to="#lore" smooth>
                Lore
              </Link>
            </li>
            <li className="menu-item">
              <Link to="#roadmap" smooth>
                Roadmap
              </Link>
            </li>
            <li className="menu-item">
              <Link to="#LiveAuction" smooth>
                Market
              </Link>
            </li>
            <li className="menu-item">
              <Link to="#faqs" smooth>
                Faqs
              </Link>
            </li>
            <li className="menu-item">
              <Link to="#team" smooth>
                Team
              </Link>
            </li>
          </ul>
        </nav>
        <div className="social-medias">
                <ul className="social-medias-container">
                  {socialMedias.map((media, index) => <li key={index}>{media}</li>)}
                </ul>
        </div>
      </div>
    </header>
  );
}
