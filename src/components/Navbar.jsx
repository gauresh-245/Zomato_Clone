
import styled from "styled-components";
import Main from "./Main";
import { useState } from "react";

const Navbar = ({isOpen,onOpen,onBlur,OpenSignUpOpen,isSignUpOpen}) => {



  return (
    <div>

        <MainContainer >
      <Navba>
        <div className="top1">
          <h2>Zomato</h2>
        </div>

        <NavigationBar>
            <div className="top2">
          <ul>
            <li>
              <a className="active" href="#home">
                Home
              </a>
            </li>
            <li>
              <a href="#news">About</a>
            </li>
            <li>
              <a href="#contact">Offers</a>
            </li>
            <li>
              <a href="#about">Help</a>
            </li>
          </ul>
          </div>
        </NavigationBar>
        
       
        <div className="btn">
        <Button onClick={onOpen}>Login</Button>
        <Outline onClick={OpenSignUpOpen}>Sign Up</Outline>
        </div>
      </Navba>




       <Box>
       <h1>zomato</h1>
       <p className="headers">Discover the best food & drinks in Mumbai</p>
       </Box>
   
      </MainContainer>
    </div>
  );
};

export default Navbar;



const Box = styled.div`
   background-color: lightblue;
   width: 1349px;
   height: 400px;
   position: absolute;
   background-image: url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png");
   background-size:cover;
`;



const MainContainer = styled.div`
position: relative;

h1{
  position: absolute;
  left: 35%;
  color:white;
  font-size: 90px;
  font-weight: 800;
  top:20%;
}
.headers{
    left: 20%;
    position: absolute;
    color:white;
    top: 200px;
    font-size: 42px;
    font-weight: 600;

}

`;


const Navba = styled.div`
    display: flex;
    background-color: #333333;
     justify-content:space-evenly;
     align-items: center;
     height: 70px;


p{
    color:white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 22px;
    font-weight: 600;

  
}
.btn{
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
h2{
  color:white;
}
`;

const NavigationBar = styled.div`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  
  }

  li {
    float: left;
  }

  li a {
    font-size: 18px;
    display: block;
    color: white;
    text-align: center;
    padding: 10px 20px;
    text-decoration: none;
    margin-left: 15px;
  }

  li a:hover:not(.active) {
    background-color: #f44336;;
  }
.active{
    background-color: #f44336;;

}
`;

const Button = styled.button`
    background-color:white; /* Green */
    border: none;
   color:black;
   width: 120px;
   height: 40px;
   text-align: center;
   text-decoration: none;
  font-size: 15px;
  transition-duration: 0.4s;

  cursor: pointer;

  &:hover{
    background-color: #f44336;
  color: white;
  }
`;


const Outline = styled.button`
   background-color:white; /* Green */
    border: none;
   color:black;
   width: 120px;
   height: 40px;
   text-align: center;
   text-decoration: none;
   font-size: 15px;
  transition-duration: 0.4s;
  margin-left: 10px;
  cursor: pointer;

  &:hover{
    background-color: #f44336;
  color: white;
  }
`;



