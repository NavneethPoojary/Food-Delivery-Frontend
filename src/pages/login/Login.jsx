import styled from "styled-components";
import LoginImage from "../../assets/log.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../utils/Button";
import { makePostRequest } from "../../Http/Https";
import { LOGIN } from "../../constants/apiConstant";
import { SUCCESS } from "../../constants/apiCodes";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../utils/loader/Loader";
import { useAuthContext } from "../../hooks/useAuthContext";
//import Spinner from "../../utils/spinner/Spinner";

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

export default function Login() {
  const loginPayload = {
    email: "",
    password: "",
  };

  const [loginData, setLoginData] = useState(loginPayload);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user, dispatch } = useAuthContext();
  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  //Login function
  const handleLogin = (e) => {
    setIsLoading(true);
    e.preventDefault();
    makePostRequest(LOGIN, {
      email: loginData.email,
      password: loginData.password,
    })
      .then((res) => {
        if (res.status === SUCCESS) {
          dispatch({
            type: "USER_SIGNUP",
            payload: res,
          });
          toast.success("Succcesfully logged in..!");
          localStorage.setItem("jwt", res?.token);
          setError("");
          navigate("/User");
        }
      })
      .catch((err) => {
        const {
          response: { data },
        } = err;
        toast.error("Failed to login");
        setError(data?.message);
      });
  };

  //if (loginData) return <Spinner />;

  return (
    <SignupContainer>
      {isLoading && <Loader />}
      <Container>
        <ImageContainer>
          <img src={LoginImage} width="100%" alt="Login" />
        </ImageContainer>
        <FormContainer>
          <Heading>LOGIN</Heading>
          <form onSubmit={handleLogin}>
            <Label>
              <Text>Email:</Text>
              <Input
                type="email"
                name="email"
                value={loginData.email}
                className="remove-focus"
                onChange={handleLoginChange}
              />
            </Label>

            <Label>
              <Text>Password:</Text>
              <Input
                type="password"
                name="password"
                value={loginData.password}
                className="remove-focus"
                onChange={handleLoginChange}
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
                disabled={!loginData.email || !loginData.password}
              >
                Login
              </Button>
            </ButtonContainer>
            <ToastContainer />
          </form>

          <TextLink>
            <span>
              Dont have an account ?{" "}
              <Link to="/signup" style={{ color: "#ef6351" }}>
                Signup
              </Link>
            </span>
            {error && <p className="error-message">{error}</p>}
          </TextLink>
        </FormContainer>
      </Container>
    </SignupContainer>
  );
}
