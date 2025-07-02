import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Menu, X, Phone, Clock } from "lucide-react";

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(37, 99, 235, 0.15);
`;

const TopBar = styled.div`
  background: rgba(0, 0, 0, 0.1);
  padding: 8px 0;
  font-size: 14px;
`;

const TopBarContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const MainHeader = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 28px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoIcon = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2563eb;
  font-weight: bold;
  font-size: 20px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background: #2563eb;
    flex-direction: column;
    justify-content: center;
    transform: translateX(${(props) => (props.$isOpen ? "0" : "100%")});
    transition: transform 0.3s ease;
    z-index: 1000;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &.active {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    display: block;
    z-index: 1001;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path) => location.pathname === path;

  return (
    <HeaderContainer>
      <TopBar>
        <TopBarContent>
          <ContactInfo>
            <ContactItem>
              <Phone size={16} />
              <span>(555) 123-4567</span>
            </ContactItem>
            <ContactItem>
              <Clock size={16} />
              <span>Mon-Fri: 8AM-8PM | Sat-Sun: 9AM-5PM</span>
            </ContactItem>
          </ContactInfo>
          <div>Emergency: (555) 911-HELP</div>
        </TopBarContent>
      </TopBar>

      <MainHeader>
        <Logo to="/">
          <LogoIcon>+</LogoIcon>
          MediCare Plus
        </Logo>

        <Nav $isOpen={isMenuOpen}>
          <NavLink
            to="/"
            className={isActive("/") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={isActive("/about") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={isActive("/contact") ? "active" : ""}
            onClick={() => setIsMenuOpen(false)}
          >
            Book Appointment
          </NavLink>
        </Nav>

        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </MenuButton>
      </MainHeader>
    </HeaderContainer>
  );
};

export default Header;
