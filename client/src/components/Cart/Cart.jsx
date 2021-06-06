import React from 'react'
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
    flex-direction:column;
`

const RightContent = styled.div``
function Cart({isAuth}) {
    const cartItem = useSelector(state => state.cart);
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
                <RightContent></RightContent>
                </MainContent>
            </React.Fragment>
          
        )
    }
}

export default Cart
