import React from "react";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Main from "./components/Main";

import Contact from "./components/Contact";
import CounterUpPage from "./components/CounterUpPage";
import Video from "./components/Video";

export default function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  const [pagesPopup, setPagesPopup] = React.useState(false);

  function openPopup() {
    setPagesPopup(true);
  }

  return (
    <div className={`page--background ${darkMode ? "dark" : ""}`}>
      <div className={`app--main__container ${darkMode ? "dark" : ""}`}>
        <Info darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Main darkMode={darkMode} />
        <Footer darkMode={darkMode} openPopup={openPopup} />
        <Video />
        <CounterUpPage />
        <Contact />
      </div>
    </div>
  );
}
