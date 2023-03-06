import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { login } from "../Redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
`;

const LeftWrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: #f7bf80;
  ${mobile({ width: "100%" })}
`;

const RightWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background: url("https://cdn.pixabay.com/photo/2017/11/02/20/31/guitars-2912447_960_720.jpg");
  ${mobile({ display: "none" })}
`;

const LoginTitle = styled.h1`
  ${mobile({ fontSize: "20px" })}
`;

const BrandTitle = styled.h1`
  font-size: 60px;
  float: right;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 60%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  ${mobile({ width: "100%" })}
  border: none;
  padding: 15px 20px;
  background-color: #0aa5a3;
  color: white;
  cursor: pointer;
  margin-top: 15px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
  };

  return (
    <Container>
      <LeftWrapper>
        <LoginTitle>LOGIN</LoginTitle>
        <Form>
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleLogin} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Wrong email or password</Error>}
          <Link>FORGOT YOUR PASSWORD?</Link>
          <Link>CREATE NEW ACCOUNT</Link>
        </Form>
      </LeftWrapper>
      <RightWrapper>
        <BrandTitle>JUMPSELLER.</BrandTitle>
      </RightWrapper>
    </Container>
  );
}

export default Login;
