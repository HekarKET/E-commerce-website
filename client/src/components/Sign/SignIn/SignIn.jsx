import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Formik, Form } from 'formik';
import { TextField } from '../TextField';

import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import { userLogin } from '../../../actions/setUser';


const Login = styled.button`
    padding-inline: 37px;
    padding-block: 12px;
    text-align: center;
    background: blue;
    color: white;
    border: none;
   

`

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

`
const Wrapper = styled.div`
    width: 600px;
    margin: auto;
    text-align: center;

`



const SignIn= ()=> {
 const history = useHistory();
  const dispatch = useDispatch();
  const login = useSelector(state => state.userLogin)
  if(login.login){
    history.push('/');
  }
    return (
      <Formik
        initialValues={{
         
          email: '',
          password: '',
         
          
        }}
        
        onSubmit={values => {
          console.log(login.login)
          dispatch(userLogin(values));
          console.log(login.login)
        }}
      >
        {formik => (
          <Wrapper align="center">
            <h1 >Login</h1>
            <StyledForm>
              <TextField label="Email" name="email" type="text" />
              <TextField label="Password" name="password" type="password" />
              <Login type="submit">Log in</Login>
              
            </StyledForm>
          </Wrapper>
        )}
      </Formik>
    )
  }

export default SignIn


