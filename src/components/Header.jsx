import { NavLink } from "react-router-dom";
import Logo from "../assets/omnifood-logo.png";
import styled from "styled-components";

const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fffcf9;
  height: 9.6rem;
  padding: 0 4.8rem;
  position: sticky;
  top: 0;
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

export default function Header() {
  return (
    <NavHeader>
      <Image src={Logo} alt="omnifood-logo" />
      <nav>
        <Ul>
          <li>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
        </Ul>
      </nav>
    </NavHeader>
  );
}
