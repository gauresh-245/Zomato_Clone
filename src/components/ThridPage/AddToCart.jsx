import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const AddToCart = () => {
   const location = useLocation();

   const {cartItems} = location.state ;


  return (
    <div>
        <Navbar>
    
        <h1>Cart Item</h1>
        <div className="btn">
        <Button>Total =  </Button>
        <Button>Pay Now </Button>
        </div>

        </Navbar>     
        <CartContainer>
         {cartItems.length > 0  ? (
            cartItems.map((product,index) => (
                 <CartItem key={index}>
                    <img src={product.image} ></img>

                    <div>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </div>
                 </CartItem>
            ))
         ) : (
            <p className="last">Your cart is empty</p>
         )
        }
        </CartContainer>
    </div>
  );
};

export default AddToCart;

const Navbar = styled.div`
  display: flex;
  background-color: #333333;
  justify-content: space-evenly;
  align-items: center;
  height: 70px;


  h2 {
    color: white;
  }
  h1{
    color:white;
  }
  
`;


const Button = styled.button`
  background-color: white; /* Green */
  border: none;
  color: black;
  width: 120px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  margin-left: 20px;
  transition-duration: 0.4s;


  cursor: pointer;

  &:hover {
    background-color: #f44336;
    color: white;
  }
`;



const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


.last{
    font-size: 40px;
    margin-top: 200px;
}

img{
  
  transition-duration: 0.3s;
  
}



img:hover{
    width: 150px;

}

`;



const CartItem = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  width: 80%;
  border-radius: 10px;

  img {
    width: 100px;
    height: auto;
    margin-right: 20px;
    border-radius: 10px;
  }

  h3 {
    margin: 0;
  }

  p {
    margin: 0;
  }
`;
