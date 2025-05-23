import React, { useEffect, useState } from "react";
import styled from "styled-components";

const PRODUCTS = [
  {
    name: "Veg Whopper Jr+Coca Cola Medium.",
    price: "₹244",
    image: "/item.jpg",
    type: "breakfast",
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
    name: "Crispy Veg Double Patty Burger+Saucy Fries,",
    price: "₹244",
    image: "/item3.jpg",
    type: "lunch",
  },
  {
    name: "Coca Cola Medium",
    price: "₹95",
    image: "/item4.jpg",
    type: "Drinks",
  },
  {
    name: "Chocolate Thick Shake",
    price: "₹189",
    image: "/item5.jpg",
    type: "Drinks",
  },
];

const BurgerKing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  useEffect(() => {
    const results = PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  return (
    <div>
      <MainContainer>
        <Navba>
          <div className="top1">
            <h2>Zomato</h2>
          </div>

          <FilterContainer>
            <Button> All</Button>
            <Button>Breakfast</Button>
            <Button>Lunch</Button>
            <Button>Dinner</Button>
          </FilterContainer>

          <NavigationBar>
            <div className="nav-Search">
              <select className="Select">
                <option>Address</option>
              </select>
              <input
                placeholder="Search for restaurant,cuisine or a dish"
                className="input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="icon">
                <i className="fa-solid fa-magnifying-glass" />
              </div>
            </div>
          </NavigationBar>
        </Navba>




        
        <ProductContainer>
                {filteredProducts.map((product, index) => (
                    <ProductCard key={index}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </ProductCard>
                ))}
            </ProductContainer>
      </MainContainer>
    </div>
  );
};

export default BurgerKing;


const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 20px;
`;


const ProductCard = styled.div`
  background-color: #f3f3f3;
  padding: 20px;
  margin: 10px;
  border-radius: 10px;
  width: 200px;
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
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
  position: relative;
`;

const Navba = styled.div`
  display: flex;
  background-color: #333333;
  justify-content: space-evenly;
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
`;

const NavigationBar = styled.div`
  .nav-Search {
    display: flex;
    width: 350px;
    height: 40px;
    border-radius: 10px;
    justify-content: space-evenly;
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
  background-color: white; /* Green */
  border: none;
  color: black;
  width: 120px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  transition-duration: 0.4s;
  margin-left: 15px;

  cursor: pointer;

  &:hover {
    background-color: #f44336;
    color: white;
  }
`;
