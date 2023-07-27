import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import Button from "../../utils/Button";
import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
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
      let signUpUser = await axios.post(`http://localhost:9000/users`, user)
      dispatch({ type: "USER_SIGNUP", payload: signUpUser.data });
      toast.success('You are signed in successfully..!')
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
    <Main>
      {isLoading && <Loader/>}
      <GridContainer>
        <FormContainer>
          <H1>Sign up</H1>
          <form>
            <Input
              type="text"
              name="user_name"
              value={user_name || ''}
              className="remove-focus"
              onChange={handleSignupChange}
              placeholder="Please enter your name"
            />
            <Input
              type="email"
              name="email"
              value={email || ''}
              onChange={handleSignupChange}
              placeholder="Please enter email"
            />
            <Input
              type="text"
              name="mobile_no"
              value={mobile_no || ''}
              onChange={handleSignupChange}
              placeholder="Please enter your mobile number"
            />
            <Input
              type="password"
              name="password"
              value={password || ''}
              onChange={handleSignupChange}
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
                onClick={handleSignup}
                disabled={!user_name || !email || !password}
              >
                Sign up
              </Button>
            </ButtonContainer>
          </form>
          <Redirect>
            Already have an account ? <Login to={"/login"}>Login</Login>
          </Redirect>
        </FormContainer>

        <ImageContainer>
          <Heading>Welcome to Omnifood</Heading>
        </ImageContainer>
      </GridContainer>
    </Main>
  );
}
