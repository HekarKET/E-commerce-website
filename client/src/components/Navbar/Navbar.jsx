import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
const Wrapper = styled.div`
height: 50px;
background-color: #333;
width: 100%;

`
const NavItems = styled.ul`
display: flex;
flex-direction: row;
color: white;
height: 100%;
align-items: center;
justify-content: space-between;
list-style-type: none;
`
const LeftItem = styled.li`
flex-grow: 6;
margin-left: 15px;
`
const RightItems = styled.li`
flex-grow: 1;
`


function Navbar() {
    const loginStatus = useSelector(state => state.loginStatus)
    return (
        <React.Fragment>
            <Wrapper>
                <NavItems>
                    <LeftItem>E commerce Website</LeftItem>
                    <RightItems> Cart </RightItems>
                    { loginStatus ?  <RightItems>Profile</RightItems>:<RightItems>Sign In</RightItems>}
                </NavItems>  
            </Wrapper>
        </React.Fragment>
    )
}

export default Navbar
