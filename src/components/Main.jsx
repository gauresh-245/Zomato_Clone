import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Main = () => {
  
  const navigate  = useNavigate();

  const goToNextPage = () => {
    navigate('/home');
  };



  return (
    <div>
      <Container>
        <Card>
   
            <div className="column">
              <div className="card">
                <img src="/food1.jpg" style={{ height: "200px" }} onClick={goToNextPage}/>
                <div className="container">
                  <h3>Order Online</h3>
                  <p>Stay home and order to your doorstep</p>
                </div>
              </div>
              <div className="card">
                <img src="/food2.jpg" style={{ height: "200px" }} />
                <div className="container">
                  <h3>Dining</h3>
                  <p>View the city's favourite dining venues</p>
                </div>
              </div>
              <div className="card">
                <img src="/food3.jpg" style={{ height: "200px" }} />
                <div className="container">
                  <h3>Nightlife and clubs</h3>
                  <p>Explore the city's top nightlife outlets</p>
                </div>
              </div>
            </div>
         
        </Card>


        
      </Container>



    </div>
  );
};

export default Main;

const Container = styled.div`
  margin-top: 400px;
  height: 450px;
  background-color: white;
  width: 1349px;
  right: 0;
  z-index: -1;
`;

const Card = styled.div`


img{
  
  transition-duration: 0.3s;
  
}



img:hover{
    padding: 12px;

}

  .column {
    display: flex;
    justify-content:space-evenly;
    
  }
  .card {
    box-shadow: 8px 8px 6px gray;
    margin-top: 80px;
    cursor: pointer;
    transition-duration: 0.4s;
  
  }
  h3 {
    text-align: center;
    padding: 5px;
    margin-top: 8px;
    font-family: "Ms Madi", cursive;
  }
  p {
    text-align: center;
  }
`;

