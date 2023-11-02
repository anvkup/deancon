import React from "react";

export default function Footer(props) {
  return (
    <div className={`footer--container ${props.darkMode ? "dark" : ""}`}>
      <a
        href="https://github.com/jethrosweb"
        target="_blank"
        className="footer--github__link"
        rel="noreferrer"
      >
        <span>
          <ion-icon name="logo-facebook"></ion-icon>
        </span>
        <span>Facebook</span>
      </a>

      <a className="footer--pages__popup" onClick={props.openPopup} href="/">
        <span>
          <ion-icon name="logo-instagram"></ion-icon>
        </span>
        <span>Intagram</span>
      </a>
    </div>
  );
}
