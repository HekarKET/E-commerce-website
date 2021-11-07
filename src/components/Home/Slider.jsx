/* eslint-disable  */
import React from "react";
import styled from "styled-components";
import "./SliderStyle.css";

function Slider() {
  return (
    <div id="slides-shop" class="cover-slides">
      <ul class="slides-container">
        <li class="text-left">
          <img src="images/banner-01.jpg" alt="" />
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="m-b-20">
                  <strong>
                    Welcome To <br /> Thewayshop
                  </strong>
                </h1>
                <p class="m-b-40">
                  See how your users experience your website in realtime or view{" "}
                  <br /> trends to see any changes in performance over time.
                </p>
                <p>
                  <a class="btn hvr-hover" href="#">
                    Shop New
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li class="text-center">
          <img src="images/banner-02.jpg" alt="" />
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="m-b-20">
                  <strong>
                    Welcome To <br /> Thewayshop
                  </strong>
                </h1>
                <p class="m-b-40">
                  See how your users experience your website in realtime or view{" "}
                  <br /> trends to see any changes in performance over time.
                </p>
                <p>
                  <a class="btn hvr-hover" href="#">
                    Shop New
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
        <li class="text-right">
          <img src="images/banner-03.jpg" alt="" />
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="m-b-20">
                  <strong>
                    Welcome To <br /> Thewayshop
                  </strong>
                </h1>
                <p class="m-b-40">
                  See how your users experience your website in realtime or view{" "}
                  <br /> trends to see any changes in performance over time.
                </p>
                <p>
                  <a class="btn hvr-hover" href="#">
                    Shop New
                  </a>
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="slides-navigation">
        <a href="#" class="next">
          <i class="fa fa-angle-right" aria-hidden="true">
            hey
          </i>
        </a>
        <a href="#" class="prev">
          <i class="fa fa-angle-left" aria-hidden="true">
            hey
          </i>
        </a>
      </div>
    </div>
  );
}

export default Slider;
