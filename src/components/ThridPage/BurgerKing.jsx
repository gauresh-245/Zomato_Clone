import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const PRODUCTS = [
  {
    name: "Veg Whopper Jr+Coca Cola Medium.",
    price: "₹244",
    image: "/item.jpg",
    type: "breakfast",
  },
  {
    name: "Chocolate Thick Shake",
    price: "₹189",
    image: "/item5.jpg",
    type: "Drinks",
  },
  {
    name: "Crispy Veg Double Patty Burger+Saucy Fries,",
    price: "₹244",
    image: "/item3.jpg",
    type: "lunch",
  },
  {
    name: "Med Fries",
    price: "₹230",
    image: "/item1.jpg",
    type: "breakfast",
  },

  {
    name: "BK Veggie Burger+Fries(Reg)+Coca Cola,",
    price: "₹340",
    image: "/item2.jpg",
    type: "lunch",
  },

  {
    name: "Coca Cola Medium",
    price: "₹95",
    image: "/item4.jpg",
    type: "Drinks",
  },
];

const BurgerKing = () => {

  const navigate = useNavigate();

  








  const[cartItems, setCartItems] = useState([]);
  const [serachData, setSearchData] = useState("");
  const [filterProducts, setFilterProducts] = useState(PRODUCTS);

  const [filterType, setFilterType] = useState("All");

  const handleType = (type) => {
    setFilterType(type);
  };

  useEffect(() => {
    let result = [];
    if (filterType === "All") {
      result = PRODUCTS.filter((product) =>
        product.name.toLowerCase().includes(serachData.toLowerCase())
      );
    } else {
      result = PRODUCTS.filter(
        (product) =>
          product.type.toLowerCase() === filterType.toLowerCase() &&
          product.name.toLowerCase().includes(serachData.toLowerCase())
      );
    }
  
    setFilterProducts(result);
  }, [filterType, serachData]);
  

  const Change = (e) => {
    setSearchData(e.target.value);
  };





 const addToCart = (product) => {
   setCartItems([...cartItems,product]);
 }; 

  const goToAddToCart = () => {
    navigate('/AddToCart', {state :{ cartItems}})
  }

  return (
    <div>
      <MainContainer>
        <Navba>
          <div className="top1">
            <h2>Zomato</h2>
          </div>

          <FilterContainer>
            <Button onClick={() => handleType("All")}> All</Button>
            <Button onClick={() => handleType("breakfast")}>Breakfast</Button>
            <Button onClick={() => handleType("lunch")}>Lunch</Button>
            <Button onClick={() => handleType("Drinks")}>Drinks</Button>
          </FilterContainer>

          <NavigationBar>
            <div className="nav-Search">
              <select className="Select">
                <option>Address</option>
              </select>
              <input
                placeholder="Search for restaurant,cuisine or a dish"
                className="input"
                value={serachData}
                onChange={Change}
              />
              <div className="icon">
                <i className="fa-solid fa-magnifying-glass" />
              </div>


            
            </div>
          </NavigationBar>

          <div  onClick={goToAddToCart}class="Cart-Item">
                         <i class="fa-solid fa-cart-shopping "></i>
                         <CartCount>{cartItems.length}</CartCount>
                    </div>


        </Navba>

        <ProductContainer>
          {filterProducts.map((product, index) => (
            <ProductCard key={index}>
              <img src={product.image} alt={product.name}></img>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </ProductCard>
          ))}
        </ProductContainer>
      </MainContainer>
    </div>
  );
};

export default BurgerKing;



const CartCount = styled.div`
  position: absolute;
  top: 10px;
  right: 26px;
  background-color: red;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 20px;
`;
const ProductCard = styled.div`
  background-color: #f3f3f3;
  cursor: pointer;
  padding: 20px;
  margin: 20px 70px;
  border-radius: 10px;
  width: 250px;
  text-align: center;
  box-shadow: 8px 8px 6px gray;

  img {
    width: 105%;
    height: auto;
    border-radius: 10px;
    transition-duration: 0.3s;
  }
  img:hover{
    padding: 10px;

}

  h3 {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  p {
    font-size: 1rem;
    color: #333;
  }
`;

const FilterContainer = styled.div``;

const MainContainer = styled.div`
  height: 150vh;
`;

const Navba = styled.div`
  display: flex;
  background-color: #333333;
  justify-content:space-around;
  align-items: center;
  height: 70px;

  p {
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 22px;
    font-weight: 600;
  }
  .btn {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  h2 {
    color: white;
  }

  .Cart-Item i{
               font-size: 30px;
               color:white;
}
.Cart-Item p{
               margin-left: 7px;
               font-weight: 700;
}
`;

const NavigationBar = styled.div`
  .nav-Search {
    display: flex;
    width: 350px;
    height: 40px;
    border-radius: 10px;
    justify-content: space-;
    transition-duration: 0.3s;
    border: none;
  }

  .nav-Search:hover {
    border: 2px solid #f44336;
  }

  .Select {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: 80px;
    border: none;
    text-align: center;
    background-color: #f3f3f3;
  }
  .input {
    width: 80%;
    font-size: 0.9rem;
    border: none;
    outline: none;
  }
  .icon {
    color: white;
    width: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;
    background-color: #f44336;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }




`;

const Button = styled.button`
  background-color:#f44336; /* Green */ 
  border: none;
  color:white;
  width: 120px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  transition-duration: 0.5s;
  margin-left: 15px;
  cursor: pointer;

  &:hover {
    background-color:white;
    color:black;
  }
`;
