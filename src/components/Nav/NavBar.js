import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";
import { ReactComponent as Logo } from "../../assets/Allcats_logo.svg";
import { ReactComponent as HomeLogo } from "../../assets/Allcats_home.svg";

const Navbar = ({ isOpen, handleNavbar }) => {
  const [anchorEl, setAnchorEl] = useState();

  return (
    <>
      <NavBar>
        <FlexContainer>
          <BurgerWrapper>
            <BurgerMenu isOpen={isOpen} handleNavbar={handleNavbar} />
          </BurgerWrapper>
          <Link to="/">
            <Logo />
          </Link>
          <NavLinks>
            <Link to="/cat-delivery">Cat delivery</Link>
            <Link to="/book-visit">Book a visit</Link>
            <Link to="/donate">Donate</Link>
            <Link to="/">
              <HomeLogo />
            </Link>
          </NavLinks>
          <MobileHomeLink>
            <Link to="/">
              <HomeLogo />
            </Link>
          </MobileHomeLink>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        isOpen={isOpen}
        handleNavbar={handleNavbar}
        anchorEl={anchorEl}
      />
    </>
  );
};

export default Navbar;

const NavBar = styled.nav`
  width: 100vw;
  top: 0;
  left: 0;
  background: var(--white);
  z-index: 3;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
  align-items: center;
`;

const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #000;
    font-size: 1.25rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    margin: 0 1rem;

    &:hover {
      opacity: 0.7;
    }

    /* &:not(:last-child) { */

    /* } */
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileHomeLink = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
