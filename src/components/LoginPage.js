import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    text-decoration: none;
  }
  body {
    background: url('https://formester.s3.ap-south-1.amazonaws.com/public/users/1750/forms/1876/builder/983474d0-afbc-4119-b65b-8f0f5bff204b-screening.png');
    background-size: cover;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-family: sans-serif;
  }
  a {
    color: #000;
  }
  a:hover {
    color: #007bff;
  }
`;

const Container = styled.div`
  max-width: 400px;
  margin: auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin-top: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  padding-bottom: 23px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 93%;
  margin-bottom: 1rem;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 19px;
  margin-left: 93px;
  cursor: pointer;
  &:hover {
    background-color: #006fe6;
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const AdjustLabel = styled.label`
  display: flex;
  white-space: nowrap;
  gap: 12px;
`;

const ForgotLink = styled.a`
  text-decoration: none;
  color: #007bff;
`;

const SignupText = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();
  navigate("/home"); 
};


  return (
    <>
      <GlobalStyle />
      <Container>
        <Heading>Login</Heading>
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Options>
            <AdjustLabel>
              <input type="checkbox" />
              Remember me
            </AdjustLabel>
            <ForgotLink href="/forgot-password">Forgot password?</ForgotLink>
          </Options>
          <Button type="submit">Login</Button>
        </Form>
        <SignupText>
          Don't have an account? <a href="#">Create a new account</a>
        </SignupText>
      </Container>
    </>
  );
};

export default LoginPage;
