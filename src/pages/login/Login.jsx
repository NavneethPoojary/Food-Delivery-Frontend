import styled from "styled-components";
import LoginImage from "../../assets/log.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "../../utils/Button";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../utils/loader/Loader";
import { useAuthContext } from "../../hooks/useAuthContext";
import axios from "axios";
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
  const navigate = useNavigate();
  const { user, dispatch } = useAuthContext();

  const [loginData, setLoginData] = useState({
    user_name: "",
    email: "",
    mobile_no: "", 
    password: ""
  });

  let userDetails;
  let presentUser;
  let isUserPresent = false;
  let loggedInUser
  const { email, password} = loginData;

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  //Login function
  const handleLogin = async(e) => {
    e.preventDefault();
    try{
      setIsLoading(true);
      await axios.get(`http://localhost:9000/users`)
            .then((response) => {
                console.log("userDetails", response);
                 userDetails = response
            }).catch((error) => setError(error.message))

            userDetails['data'].forEach(element => {
                if(element.email!==undefined && (element.email.toLowerCase() === loginData.email.toLowerCase()) && element.password !==undefined && (element.password.toLowerCase() === loginData.password.toLowerCase())){
                    presentUser=element;
                    isUserPresent=true;
                    return presentUser;
                }
            })
            console.log("presentUser", presentUser);
            if(isUserPresent){  
            await axios.get(`http://localhost:9000/users/${presentUser.id}`)
                .then((response) => {
                    console.log("response",response);
                    if(response.data!=null){
                        loggedInUser = response.data
                    };
                    console.log("loggedInUser", loggedInUser);
                })
                setLoginData(""); 
                navigate(`/User`);
                
            }else{
                toast.error("Ooops... User not found");
            }
      }catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
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
                value={email}
                className="remove-focus"
                onChange={handleLoginChange}
              />
            </Label>

            <Label>
              <Text>Password:</Text>
              <Input
                type="password"
                name="password"
                value={password}
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
                disabled={!email || !password}
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
