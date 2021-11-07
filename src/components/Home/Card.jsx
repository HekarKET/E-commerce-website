import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Wrapper = styled.div`
  width: 250px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 15px;
  :hover {
    transform: scale(1, 1.2);
    transition-duration: 3s;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 80%;

  border-radius: 30px;
`;

const Title = styled.p`
  :hover {
    color: red;
  }
`;
const Price = styled.p``;
const Star = styled.div`
  display: flex;
`;

function Card({ id, img, title, price, stars }) {
  return (
    <Link to={`/Product/${id}`}>
      <Wrapper>
        <Image src={img}></Image>

        <Title>{title}</Title>
        <Star>
          <ReactStars
            count={5}
            value={stars}
            size={24}
            activeColor="#ffd700"
            edit={false}
          />
        </Star>
        <Price>Rs. {price}</Price>
      </Wrapper>
    </Link>
  );
}

export default Card;
