import React from "react";
import "./Video.css";
import { Carousel } from "react-bootstrap"; // Change the import statement
import Vid1 from "../videos/ssq.mp4";
import "bootstrap/dist/css/bootstrap.css";
import ReactPlayer from "react-player";

const Video = () => {
  const videoProperties = [
    {
      id: 1,
      title: "Video 1", // Change the title
      src: Vid1,
      credit: "us",
    },
    {
      id: 2,
      title: "Video 2", // Change the title
      src: Vid1,
      credit: "us",
    },
    {
      id: 3,
      title: "Video 3", // Change the title
      src: Vid1,
      credit: "us",
    },
  ];

  return (
    <div>
      <h2
        style={{
          display: "flex",
          flex: "center",
          justifyContent: "center",
          margin: "7px",
          marginTop: "30px",
          overflow: "hidden",
        }}
      >
        Video Gallery
      </h2>
      <div className="App">
        <Carousel>
          {videoProperties.map((videoObj) => {
            return (
              <Carousel.Item key={videoObj.id}>
                <ReactPlayer
                  url={videoObj.src}
                  pip={true}
                  controls={true}
                  playing={true}
                />
                <Carousel.Caption>
                  <h3>{videoObj.title}</h3>
                  <p>{videoObj.credit}</p>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Video;
