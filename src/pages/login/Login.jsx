import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../../utils/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Loader from "../../utils/loader/Loader";

const Main = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`;

const GridContainer = styled.div`
  display: grid;
  max-width: 900px;
  margin: 90px auto;
  grid-template-columns: 2fr 1fr;
  border: 1px solid #ececec;
  border-radius: 8px;
  overflow: hidden;
`;
const ImageContainer = styled.div`
  background-image: linear-gradient(to right, #e67e22, #eea564);
  overflow: hidden;
`;

const FormContainer = styled.div`
  width: 100%;
  padding: 9rem;
`;
const Input = styled.input`
  display: block;
  padding: 1.5rem;
  margin-top: 1.8rem;
  width: 100%;
  outline: none;
  border: none;
  border: 1px solid #ddd;
  border-radius: 7px;
`;

const H1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
  padding-bottom: 4rem;
  letter-spacing: 0.6rem;
`;

const Heading = styled.span`
  display: block;
  text-align: center;
  margin-top: 200px;
  font-size: 2.8rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  line-height: 4rem;
  color: #ffff;
  font-weight: 600;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border: none;
`;

const Redirect = styled.span`
  display: block;
  margin-top: 15px;
  color: #333;
  font-size: 15px;
  text-align: center;
`;
const Login = styled(Link)`
  text-decoration: none;
  letter-spacing: 0.85px;
  margin-left: 10px;
  color: #eb984e;
  font-weight: 700;
  cursor: pointer;
`;

export default function Signup() {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    user_name: "",
    email: "",
    mobile_no: "",
    password: "",
  });

  const { email, password } = loginData;

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  //Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      let userDetails = await axios.get(`http://localhost:9000/users`);
      let response = await userDetails.data;
      response.forEach((user) => {
        if (
          user.email !== undefined &&
          user.email.toLowerCase() === loginData.email.toLowerCase() &&
          user.password !== undefined &&
          user.password.toLowerCase() === loginData.password.toLowerCase()
        ) {
          if (user) {
            axios.get(`http://localhost:9000/users/${user.id}`);
            toast.success("Logged in successfully...!");
            setLoginData("");
            navigate(`/user`);
          }
        } else {
          toast.error("Ooops... User not found");
        }
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  //if (loginData) return <Spinner />;

  return (
    <Main>
      {isLoading && <Loader />}
      <GridContainer>
        <FormContainer>
          <H1>Login</H1>
          <form>
            <Input
              type="email"
              name="email"
              value={email || ""}
              onChange={handleLoginChange}
              placeholder="Please enter email"
            />
            <Input
              type="password"
              name="password"
              value={password || ""}
              onChange={handleLoginChange}
              placeholder="Please enter password"
            />

            <ButtonContainer>
              <Button
                bgColor={"#e67e22"}
                width={"50%"}
                textColor={"#fff"}
                cursor={"pointer"}
                padding={"15px"}
                bRadius={"8px"}
                fontSize={"14px"}
                onClick={handleLogin}
                disabled={!email || !password}
              >
                Login
              </Button>
            </ButtonContainer>
          </form>
          <Redirect>
            Dont have an account ? <Login to={"/signup"}>Register</Login>
          </Redirect>
        </FormContainer>

        <ImageContainer>
          <Heading>Welcome to Omnifood</Heading>
        </ImageContainer>
      </GridContainer>
    </Main>
  );
}
