import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BookVisit from "./components/Layouts/BookVisit";
import CatDelivery from "./components/Layouts/CatDelivery";
import CatList from "./components/Layouts/CatList";
import Donate from "./components/Layouts/Donate";
import Navbar from "./components/Nav/NavBar";
import CatDetails from "./components/Layouts/CatDetails";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2ea372",
      },
      secondary: {
        main: "#FFFFFF	",
      },
      white: {
        main: "#FFFFFF",
      },
      black: {
        main: "#000",
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar isOpen={isOpen} handleNavbar={() => handleNavbar()} />
        <Switch>
          <Route exact path="/">
            <CatList />
          </Route>
          <Route exact path="/cat-delivery">
            <CatDelivery />
          </Route>
          <Route exact path="/book-visit">
            <BookVisit />
          </Route>
          <Route exact path="/donate">
            <Donate />
          </Route>
          <Route path="/cat" component={CatDetails} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
