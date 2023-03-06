import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
`;

const RightWrapper = styled.div`
  width: 70%;
  ${mobile({width: "100%"})}
  padding: 20px;
  background-color: #f7bf80;
`;

const LeftWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: url("https://cdn.pixabay.com/photo/2017/11/02/20/31/guitars-2912447_960_720.jpg");
  ${mobile({display: "none"})}
`;

const BrandTitle = styled.h1`
  font-size: 60px;
`;

const RegisterTitle = styled.h1`
${mobile({fontSize: "20px"})}`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0aa5a3;
  color: white;
  cursor: pointer;
`;

function Register() {
  return (
    <Container>
      <LeftWrapper>
        <BrandTitle>JUMPSELLER.</BrandTitle>
      </LeftWrapper>
      <RightWrapper>
        <RegisterTitle>CREATE ACCOUNT</RegisterTitle>
        <Form>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </RightWrapper>
    </Container>
  );
}

export default Register;
