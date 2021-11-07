import React, { useEffect } from "react";
import styled from "styled-components";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../actions/setProduct";
//import Slider from "./Slider";
import NCarousel from "./Carousel";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  //::cue() transition: border-radius 1s ease-in 1s;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 5px;
  row-gap: 30px;
  &:hover {
    transition: border-radius 1s ease-in 1s;
  }
`;

function Home() {
  const productState = useSelector((state) => state.Product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Wrapper>
      {" "}
      <NCarousel />
      <Cards>
        {productState.loading ? (
          <h1>Please wait loading...</h1>
        ) : (
          productState.filterproduct.map((prod) => (
            <Card
              key={prod._id}
              id={prod._id}
              img={prod.Image}
              title={prod.Title}
              price={prod.Price}
              stars={prod.Stars}
            />
          ))
        )}
      </Cards>
    </Wrapper>
  );
}

export default Home;
