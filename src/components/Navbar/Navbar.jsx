import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { filterProduct } from '../../actions/setProduct';

const Wrapper = styled.div`
  height: 100px;
  background-color: #000000;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: cursive;
  font-size: 30px;
  color: #910b0b;
  &:hover {
    text-decoration: none;
    color: red;
  }
`;

const NavItems = styled.ul`
  display: flex;
  flex-direction: row;
  color: white;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  list-style-type: none;
`;
const LeftItem = styled.li`
  flex-grow: 6;
  margin-left: 40px;
`;
const RightItems = styled.li`
  flex-grow: 1;
`;

function Navbar() {
  const userLogin = useSelector((state) => state.userLogin);
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <Wrapper>
        <NavItems>
          <LeftItem>
            <StyledLink to='/'>FASHION FACTORY</StyledLink>
          </LeftItem>

          {userLogin.login ? (
            <RightItems>
              {" "}
              <Dropdown onSelect={(e,b)=>dispatch(filterProduct(e))}>
                <Dropdown.Toggle variant='success' id='dropdown-basic'>
                  Filter
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item eventKey="trouser" >trouser</Dropdown.Item>
                  <Dropdown.Item eventKey="party">party</Dropdown.Item>
                  <Dropdown.Item eventKey="shirt">shirt</Dropdown.Item>
                  <Dropdown.Item eventKey="casaul">casaul</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </RightItems>
          ) : null}

          {userLogin.login ? (
            <RightItems>
              {" "}
              <StyledLink to='/cart'>Cart</StyledLink>{" "}
            </RightItems>
          ) : null}

          {userLogin.login ? (
            <RightItems>
              {" "}
              <StyledLink to='/your-orders'>Previous orders</StyledLink>{" "}
            </RightItems>
          ) : null}

          {userLogin.login ? (
            <RightItems>
              <StyledLink to='/profile'>Profile</StyledLink>
            </RightItems>
          ) : (
            <RightItems>
              <StyledLink to='/register'>Sign in</StyledLink>
            </RightItems>
          )}
        </NavItems>
      </Wrapper>
    </React.Fragment>
  );
}

export default Navbar;
