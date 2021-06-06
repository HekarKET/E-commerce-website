import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import Grid from '../Cart/Grid'

const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 700px;
    margin: 30px;

`


const MainContent = styled.div`
    display: flex;
   
`

const RightContent = styled.div`
    border: solid 1px #dadada;
    width: 300px;
    margin-top:30px ;
    height: 190px;
    display: flex;
    flex-direction: column;
`

const Label = styled.strong``
const Value = styled.p``
const Group = styled.div`
    display: flex;
    margin: 10px;
`

const Checkout = styled.button`
    border: none;
    padding-block: 6px;
    width: 90%;
    margin: 0 auto;
    border-radius: 12px;
    background-color: #FF9F00;
`

function Cart({isAuth}) {
    const cartItem = useSelector(state => state.cart);
    // console.log('rendered')
    const [countPrice, setcountPrice] = useState({})
    const handleSum = (total,num)=>{
        return total + parseInt(num.selected)
    }
    const handlePrice = (total,num)=>{
        return total + parseInt(num.Price)*parseInt(num.selected)
    }
    useEffect(() => {
            const sum = cartItem.reduce(handleSum,0);
            const price = cartItem.reduce(handlePrice,0);
            setcountPrice({sum,price})
            

    }, [cartItem])
    if(!isAuth){
        return <Redirect to='/login'/>
    }
    else{
        return (
            <React.Fragment>
                 <MainContent>
                <LeftContent>
                {cartItem.map( (item)=>(
                    <Grid
                        key={item._id}
                        id={item._id}
                        title={item.Title}
                        owner={item.Owner}
                        quantity={item.Quantity}
                        price={item.Price}
                        image={item.Image}
                        selected={item.selected}
                    />
                ) 
                )}
                </LeftContent>
                <RightContent>
                    <Group>
                        <Label>Price ({`${countPrice.sum} items`}):<span>&nbsp;&nbsp;</span></Label>
                        <Value>{`Rs. ${countPrice.price}`}</Value>
                    </Group>
                    
                    <Group>
                        <Label>Discount :<span>&nbsp;&nbsp;</span></Label>
                        <Value>{`Rs. 100`}</Value>
                    </Group>
                    
                    <Group>
                        <Label>Price :<span>&nbsp;&nbsp;</span></Label>
                        <Value>{`Rs. ${countPrice.price-100}`}</Value>
                    </Group>
                    <Checkout>PROCEED TO CHECKOUT</Checkout>
                </RightContent>
                </MainContent>
            </React.Fragment>
          
        )
    }
}

export default Cart
