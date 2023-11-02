import React from "react";
import DisplayPic from "../pics/photo.jpg";

export default function Info(props) {
  return (
    <nav className={`info--container ${props.darkMode ? "dark" : ""}`}>
      <img src={DisplayPic} alt="Display Picture" className="info--picture" />

      <h1>Jethro Dean</h1>

      <h4>Frontend Developer | JavaScript | React</h4>

      <a href="mailto: " target="_blank" className="info--email__link">
        <span>
          <ion-icon name="mail"></ion-icon>
        </span>
        <span>Email</span>
      </a>
      <a href="" target="_blank" className="info--linkedin__link">
        <span>Contact</span>
      </a>
    </nav>
  );
}
