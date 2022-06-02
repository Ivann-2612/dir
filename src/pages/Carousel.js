import React, { useState } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Img1 from "../assets/images/_VPP7471-2.jpg";
import Img2 from "../assets/images/_VPP5802-2.jpg";
import Img3 from "../assets/images/_VPP5806-2.jpg";

const Carousel = () => {
  const [autoplay] = useState(true);

  const style = {
    textAlign: "center",
    padding: "200px 0",
    fontSize: "30px",
    width: "100%",
    height: "475.75px",
    position: "relative",
    zIndex: "5",
    border: "none",
  };
  const styleImg = {
    textAlign: "center",
    position: "absolute",
    top: "0",
    left: "0",
    ovbjectFit: "cover",
    height: "100%",
    objectposition:'center',
    width: "100%",
    border: "none",
  };

  return (
    <div>
      <div className="hero-overlay"></div>
      <div>
        <Slide
          autoplay={autoplay}
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" ,position:'relative',zIndex:'0'}}
        >
          <div style={style}>
            <img style={styleImg} src={Img1} alt="" />
             <div className="carousel-caption">
            <h1 className="ng-binding">EMBRACE THE NEW CONCEPT</h1>
            <h2 className="ng-binding">
            Outsourcing that works? Try niche-outsourcing.
            </h2>
          </div>
          </div>
         
          <div style={style}>
            <img style={styleImg} src={Img2}  alt="" />
            <div className="carousel-caption">
            <h1 className="ng-binding">INCREASE EFFICIENCIES</h1>

            <h2 className="ng-binding">
            Reduce platform, project risk and costs.
            </h2>
          </div>
          </div>
          <div style={style}>
            <img style={styleImg} src={Img3}  alt="" />
            <div className="carousel-caption">
            <h1 className="ng-binding">ENJOY WHAT YOU DO</h1>
            <h2 className="ng-binding">
            Work with people who get the game.
            </h2>
          </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Carousel;
