import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Form/Login";
import styled from "styled-components";
import SignUp from "./components/Form/SignUp";
import HomePage from "./components/SecondPageComponents/HomePage";
import Main from "./components/Main";
import BurgerKing from "./components/ThridPage/BurgerKing";
import AddToCart from "./components/ThridPage/AddToCart";

const App = () => {
  const [isOpen, setOpen] = useState(false);
  const [isBlurred, setBlurred] = useState(false);

  const [isSignUpOpen, setSignUpOpen] = useState(false);
  const [Blurreds, setBlurreds] = useState(false);

  const OpenSignUpOpen = () => {
    setSignUpOpen(true);
    setBlurreds(true);
  };

  const CloseSignUp = () => {
    setSignUpOpen(false);
    setBlurreds(false);
  };

  const handleBlur = (value) => {
    setBlurred(value);
  };

  const Seconndblur = (e) => {
    setBlurreds(e);
  };

  const onOpen = () => {
    setOpen(true);
    setBlurred(true);
  };

  const onClose = () => {
    setOpen(false);
    setBlurred(false);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AllContainer>
                <Conatiner2 Blurreds={Blurreds}>
                  <Container isBlurred={isBlurred}>
                    <Navbar
                      isOpen={isOpen}
                      onOpen={onOpen}
                      OpenSignUpOpen={OpenSignUpOpen}
                      isSignUpOpen={isSignUpOpen}
                    />
                  </Container>
                </Conatiner2>
                <Login isOpen={isOpen} onClose={onClose} onBlur={handleBlur}>
                  Hii
                </Login>
                <SignUp
                  isSignUpOpen={isSignUpOpen}
                  CloseSignUp={CloseSignUp}
                  Blur={Seconndblur}
                ></SignUp>
                <Main />
              </AllContainer>
            }
          />

          <Route path="/home" element={<HomePage />} />
          <Route path="/burgerking" element={<BurgerKing />} />
          <Route path="/AddToCart" element={<AddToCart />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

const Container = styled.div`
  filter: ${(props) => (props.isBlurred ? "blur(5px)" : "none")};
  transition: filter 0.1s ease;
`;

const Conatiner2 = styled.div`
  filter: ${(props) => (props.Blurreds ? "blur(5px)" : "none")};
  transition: filter 0.1s ease;
`;

const AllContainer = styled.div``;
