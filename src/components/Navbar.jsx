import { NavLink } from "react-router-dom";
import Logo from "../assets/omnifood-logo.png";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fdf2e9;
  height: 9.6rem;
  padding: 0 4.8rem;
`;

const Image = styled.img`
  height: 2.2rem;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3.2rem;
`;

export default function Navbar() {
  return (
    <Header class="header">
      <Image src={Logo} alt="omnifood-logo" />
      <nav class="main-nav">
        <Ul>
          <li>
            <NavLink className="nav-link" to="/signup">
              Sign up
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
        </Ul>
      </nav>
    </Header>
  );
}
