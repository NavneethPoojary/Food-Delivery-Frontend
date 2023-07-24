import styled from "styled-components";
import SignupImage from "../../assets/sign.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../utils/Button";
import { SIGNUP } from "../../constants/apiConstant";
import { makePostRequest } from "../../Http/Https";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/loader/Loader";

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
  const payload = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState(payload);
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //Signup function
  const handleSignup = (e) => {
    setIsLoading(true);
    e.preventDefault();

    makePostRequest(SIGNUP, {
      name: signUpData.name,
      email: signUpData.email,
      mobile_no: signUpData.mobile,
      password: signUpData.password,
    })
      .then((res) => {
        if (res.statusCode === "SUCCESS") {
          navigate("/login");
        }
      })
      .catch((err) => {
        const {
          response: { data },
        } = err;
        setError(data?.message);
      });
  };

  const handleSignupChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SignupContainer>
      {isLoading && <Loader />}
      <Container>
        <ImageContainer>
          <img src={SignupImage} width="100%" alt="Login" />
        </ImageContainer>
        <FormContainer>
          <Heading>SIGN UP</Heading>
          <form onSubmit={handleSignup}>
            <Label>
              <Text>Username:</Text>
              <Input
                type="text"
                name="name"
                value={signUpData.name}
                className="remove-focus"
                onChange={handleSignupChange}
              />
            </Label>

            <Label>
              <Text>Email:</Text>
              <Input
                type="email"
                name="email"
                value={signUpData.email}
                className="remove-focus"
                onChange={handleSignupChange}
              />
            </Label>

            <Label>
              <Text>Mobile Number:</Text>
              <Input
                type="text"
                name="mobile"
                value={signUpData.mobile}
                className="remove-focus"
                onChange={handleSignupChange}
              />
            </Label>

            <Label>
              <Text>Password:</Text>
              <Input
                type="password"
                name="password"
                value={signUpData.password}
                className="remove-focus"
                onChange={handleSignupChange}
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
                onClick={handleSignup}
                disabled={
                  !signUpData.name || !signUpData.email || !signUpData.password
                }
              >
                Signup
              </Button>
            </ButtonContainer>
          </form>
          <TextLink>
            <span>
              Alrady have an account ?{" "}
              <Link to="/login" style={{ color: "#ef6351" }}>
                LogIn
              </Link>
            </span>
            {error && <p className="error-message">{error}</p>}
          </TextLink>
        </FormContainer>
      </Container>
    </SignupContainer>
  );
}
