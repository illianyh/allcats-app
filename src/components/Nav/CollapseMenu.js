import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuLink = styled(Link)`
  text-decoration: none;
  color: #000;
  font-size: 1.25rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin: 0 1rem;
      &:hover {
      opacity: 0.7;
    }
}
`;
const CollapseMenu = ({ handleNavbar, isOpen, anchorEl }) => {
  return (
    <>
      <Menu
        id="long-menu"
        keepMounted
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleNavbar}
        PaperProps={{
          style: {
            width: "250px",
            height: "100vh",
            position: "fixed",
            borderRadius: "0",
            boxShadow: "none",
            left: 0,
          },
        }}
      >
        <MenuItem>
          <MenuLink to="/cat-delivery" onClick={() => handleNavbar()}>
            Cat delivery
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/book-visit" onClick={() => handleNavbar()}>
            Book a visit
          </MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink to="/donate" onClick={() => handleNavbar()}>
            Donate
          </MenuLink>
        </MenuItem>
      </Menu>
    </>
  );
};
export default CollapseMenu;
