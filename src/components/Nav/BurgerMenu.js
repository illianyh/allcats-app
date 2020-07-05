import React from "react";
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


const Burgermenu = ({ handleNavbar, isOpen }) => {
  if(isOpen){
    return (
      <div
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="secondary"
          size="large"
          onClick={handleNavbar}
        >
         
         <CloseIcon style={{color: "black", fontSize: "3rem"}} />
         
        </div>
    );
  }
  else{
  return (
    <div
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="secondary"
        size="large"
        onClick={handleNavbar}
      > 
       <MenuIcon  style={{color: "black", fontSize: "3rem"}} />
      </div>
  );
};
}

export default Burgermenu;
