import styled from "styled-components";
import SignupImage from "../../assets/sign.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../utils/Button";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../../utils/loader/Loader";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";

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
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
  letter-spacing: 0.75px;
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
  const navigate = useNavigate();
  const { dispatch } = useAuthContext();

  const [user, setUser] = useState({
    user_name: "",
    email: "",
    mobile_no: "",
    password: "",
  });

  const { user_name, email, mobile_no, password } = user;

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  //Signup function
  const handleSignup = async (e) => {
    e.preventDefault();
    try{
      setIsLoading(true);
      await axios.post(`http://localhost:9000/users`, user)
      dispatch({ type: "USER_SIGNUP", payload: response.data });
      toast('You are signed in successfully..!')
      setUser("");
      navigate("/login");
    }catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignupChange = (e) => {
    setUser({
      ...user,
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
        <ToastContainer />
        <FormContainer>
          <Heading>SIGN UP</Heading>
          <form onSubmit={handleSignup}>
            <Label>
              <Text>Username:</Text>
              <Input
                type="text"
                name="user_name"
                value={user_name}
                className="remove-focus"
                onChange={handleSignupChange}
              />
            </Label>

            <Label>
              <Text>Email:</Text>
              <Input
                type="email"
                name="email"
                value={email}
                className="remove-focus"
                onChange={handleSignupChange}
              />
            </Label>

            <Label>
              <Text>Mobile Number:</Text>
              <Input
                type="text"
                name="mobile_no"
                value={mobile_no}
                className="remove-focus"
                onChange={handleSignupChange}
              />
            </Label>

            <Label>
              <Text>Password:</Text>
              <Input
                type="password"
                name="password"
                value={password}
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
                disabled={!user_name || !email || !password}
              >
                Signup
              </Button>
            </ButtonContainer>
          </form>
          <TextLink>
            <span
              style={{ fontSize: "1.3rem", fontWeight: "500", color: "#333" }}
            >
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
