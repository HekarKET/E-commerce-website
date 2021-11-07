import React from "react";
//import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Home/CarouselStyle.css";
import { Carousel } from "react-responsive-carousel";
import Img1 from "../assets/banner-02.jpg";
import Img2 from "../assets/shopingbanner.jpg";
import Img3 from "../assets/image.jpg";


const NCarousel = () => {
  //class DemoCarousel extends Component {
  //render() {
  return (
    <Carousel>
      <div>
        <img src={Img1} alt="" />
        
      </div>
      <div>
        <img src={Img2} alt="" />
        
      </div>
      <div>
        <img src={Img3} alt="" />
        
      </div>
    </Carousel>
  );
};

export default NCarousel;
