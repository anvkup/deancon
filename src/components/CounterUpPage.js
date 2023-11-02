import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const CounterUpPage = () => {
  const [counterOn, SetCounterOn] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => SetCounterOn(true)}
      onExit={() => SetCounterOn(false)}
    >
      <div className="">
        <div
          style={{
            marginTop: "30px",
          }}
        >
          <h2>Our Achivements</h2>
        </div>
        <div
          style={{
            width: "100%",
            background: "black",
            marginTop: "10px",
            marginBottom: "8px",
            color: "white",
            padding: "50px",
            flex: "center",
          }}
        >
          <div>
            <FontAwesomeIcon icon="fa-regular fa-coffee" />
          </div>
          <h1>
            {counterOn && (
              <CountUp start={0} end={100} duration={2} delay={0} />
            )}
            +
          </h1>
          <h2>Employs</h2>
        </div>
        <div
          style={{
            width: "100%",
            background: "black",
            marginTop: "10px",
            marginBottom: "8px",
            color: "white",
            padding: "50px",
            flex: "center",
          }}
        >
          <ion-icon name="logo-"></ion-icon>
          <h1>
            {counterOn && (
              <CountUp start={0} end={2500} duration={2} delay={0} />
            )}
            +
          </h1>
          <h2>Branches</h2>
        </div>
        <div
          style={{
            width: "100%",
            background: "black",
            marginTop: "10px",
            marginBottom: "8px",
            color: "white",
            padding: "50px",
            flex: "center",
          }}
        >
          <h1>
            {counterOn && (
              <CountUp start={0} end={550} duration={2} delay={0} />
            )}
            +
          </h1>
          <h2>Teams</h2>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;
