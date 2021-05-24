import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    width: 250px;
    height: 330px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 15px;

`
const Image = styled.img`
width: 100%;
height: 80%;
`

const Title = styled.p`




`
const Price = styled.p``
const Star = styled.div`
display: flex;
`
const Stars = styled.i`
    color: yellow;
    font-size: 10px;
    text-shadow: 0 0 1px #000;

`

function Card({img,title,price,stars}) {

    return (
        
        <Wrapper>
            <Image src={img}></Image>
            
            <Title>{title}</Title>
            <Star>
            {[...Array(stars)].map((e,i) => <Stars className="fas fa-star" key={i}></Stars>)}
            {[...Array(5-stars)].map((e,i) => <Stars className="far fa-star" key={i}></Stars>)}
            
            </Star>
            <Price>Rs. {price}</Price>
         
           
        </Wrapper>
    )
}

export default Card
