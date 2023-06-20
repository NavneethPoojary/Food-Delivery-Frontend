import styled from "styled-components";
import LoginImage from "../../assets/log.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../utils/Button";

const SignupContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 50px auto;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d2e9e9;
  border-radius: 7px;
  padding: 30px;
`;

const ImageContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

const FormContainer = styled.div`
  flex: 1;
  padding: 10px;
`;

const Heading = styled.h2`
  text-align: center;
`;

const Label = styled.label`
  display: block;
  padding: 10px;
`;

const Text = styled.span`
  display: block;
  padding-bottom: 9px;
`;

const Input = styled.input`
  padding: 14px;
  border-radius: 4px;
  width: 75%;
  border: 1px solid #ddd;
`;

const TextLink = styled.div`
  text-align: center;
  padding-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
`;

export default function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  //Login function
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(name, password);
  };

  return (
    <SignupContainer>
      <Container>
        <ImageContainer>
          <img src={LoginImage} width="100%" alt="Login" />
        </ImageContainer>
        <FormContainer>
          <Heading>LOGIN</Heading>
          <form onSubmit={handleLogin}>
            <Label>
              <Text>Username:</Text>
              <Input
                type="text"
                name="name"
                value={name}
                className="remove-focus"
                onChange={(e) => setName(e.target.value)}
              />
            </Label>

            <Label>
              <Text>Password:</Text>
              <Input
                type="password"
                name="password"
                value={password}
                className="remove-focus"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Label>

            <ButtonContainer>
              <Button
                bgColor={"#ef6351"}
                bRadius={"10px"}
                textColor={"#fff"}
                width={"40%"}
                cursor={"pointer"}
                padding={"15px"}
                onClick={handleLogin}
              >
                Login
              </Button>
            </ButtonContainer>
          </form>

          <TextLink>
            <span>
              Dont have an account ?{" "}
              <Link to="/signup" style={{ color: "#ef6351" }}>
                Signup
              </Link>
            </span>
          </TextLink>
        </FormContainer>
      </Container>
    </SignupContainer>
  );
}
