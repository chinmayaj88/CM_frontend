import React from "react";
import "./slider.css";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
const Slider = () => {
  const sliderStyles = {
    width: "100%", // set the width
    height: "500px", // set the height
    margin: "0 auto", // center the slider
  };

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <div className="slider-container">
      <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={6000}
        style={sliderStyles}
        className="organic-arrows"
        bullets={false}
        showTimer={false}
      >
        <div data-src="/assets/sc1.jpg">1</div>
        <div data-src="/assets/sc2.jpg">2</div>
        <div data-src="/assets/sc3.jpg">3</div>
        <div data-src="/assets/sc1.jpg">1</div>
        <div data-src="/assets/sc2.jpg">2</div>
        <div data-src="/assets/sc3.jpg">3</div>
      </AutoplaySlider>
      <br />
    </div>
  );
};

export default Slider;
