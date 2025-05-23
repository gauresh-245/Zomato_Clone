import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const HomePage = () => {

  const navigate  = useNavigate();

  const goToBurgerKing = () => {
    navigate('/burgerking');
  };

  return (
  <>
 
    <div>
    
    

    <MainContainer >
      <Navba>
        <div className="top1">
          <h2>Zomato</h2>
        </div>

        <NavigationBar>
        <div className="nav-Search">
        <select className="Select">
          <option>Address</option>
        </select>
        <input placeholder="Search for restaurant,cuisine or a dish" className="input" />
        <div className="icon">
          <i className="fa-solid fa-magnifying-glass" />
        </div>
      </div>
        </NavigationBar>
        
       
        <div className="btn">
        <Button>Login</Button>
        <Outline>Sign Up</Outline>
        </div>
      </Navba>





     
      <MainSection>
      <h2 className="head1">
      Inspiration for your first order 
      </h2>
       
      <div className="Items">
             <img className="photo" src="/menu1.jpg"  style={{width: "150px"}}>
             </img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "5%" }}>Briyani</h5>
             <img className="photo" src="/menu2.jpg"  style={{width: "150px"}} ></img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "23%"}}>Pizza</h5>
             <img className="photo" src="/menu3.jpg"  style={{width: "150px"}}></img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "38%"}}>Chicken</h5>
             <img className="photo" src="/menu4.jpg"  style={{width: "150px"}}></img> 
             <h5 style={{ position: "absolute", top:"110%" ,left: "54%"}}>Fried Rice</h5>
             <img className="photo" src="/menu5.jpg"  style={{width: "150px"}}></img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "72%"}}>Burger</h5>
             <img className="photo" src="/menu6.jpg"  style={{width: "150px"}}></img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "88%"}}>Ice Cream</h5>


      </div>



      <h2 className="head2">
      Top brands for you
      </h2>
      
      <div className="Items">
             <img className="photo" src="/Ad1.jpg" onClick={goToBurgerKing} style={{width: "150px"}}>
             </img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "3%"}} >Burger King</h5>
             <img className="photo" src="/Ad2.jpg"  style={{width: "150px"}} ></img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "22%"}}>Subway</h5>
             <img className="photo" src="/Ad3.jpg"  style={{width: "150px"}}></img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "40%"}}>KFC</h5>
             <img className="photo" src="/Ad4.jpg"  style={{width: "150px"}}></img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "52%"}}>La Pino'z Pizza</h5>
             <img className="photo" src="/Ad5.jpg"  style={{width: "150px"}}></img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "71%"}}>Domino's</h5>
             <img className="photo" src="/Ad6.jpg"  style={{width: "150px"}}></img>
             <h5 style={{ position: "absolute", top:"110%" ,left: "86%"}}>McDonald's</h5>


      </div>



      <h2 className="head2">
       Order food online 
      </h2>


      <Card>
   
   <div className="column">
     <div className="card">
       <img src="/combo.jpg" style={{ width: "330px", height: "193px"}}/>
       <div className="container">
         <h5>La Pino'z Pizza   &nbsp; <span className="badge badge-success">3.7★</span></h5>
         <p>Pizza,Italic,Pasta,Fast &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span> ₹200 for one</span></p>
       </div>
     </div>
     <div className="card">
       <img src="/combo2.jpg" style={{width: "330px", height: "193px",}} />
       <div className="container">
         <h5>Behrouz Biryani  <span className="badge badge-success">3.9★</span></h5>
         <p>Biryani,Kebab,North-Indian &nbsp; &nbsp; &nbsp; &nbsp; <span> ₹200 for one</span></p>
       </div>
     </div>
     <div className="card">
       <img src="/combo3.jpg" style={{ width: "330px", height: "193px"}} />
       <div className="container">
         <h5>Burger King   &nbsp; &nbsp; &nbsp; <span className="badge badge-success">4.0★</span></h5>
         <p>Burger,Roll,Fast Food  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span> ₹200 for one</span></p>
       </div>
     </div>
   </div>
 


   <div className="column">
     <div className="card">
       <img src="/combo4.jpg" style={{ width: "360px", height: "193px"}}/>
       <div className="container">
         <h5>Merwans Cake Shop <span className="badge badge-success">3.7★</span></h5>
         <p>Pizza,Italic,Pasta,Fast <span> ₹200 for one</span></p>
       </div>
     </div>
     <div className="card">
       <img src="/combo5.jpg" style={{width: "330px", height: "193px",}} />
       <div className="container">
         <h5>Persain Darbar  <span className="badge badge-success">3.9★</span></h5>
         <p>Biryani,Kebab,North-Indian &nbsp; &nbsp; &nbsp; &nbsp; <span> ₹200 for one</span></p>
       </div>
     </div>
     <div className="card">
       <img src="/combo6.jpg" style={{ width: "330px", height: "193px"}} />
       <div className="container">
         <h5>Chinese Wok   &nbsp; &nbsp; &nbsp; <span className="badge badge-success">4.0★</span></h5>
         <p>Burger,Roll,Fast Food  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span> ₹200 for one</span></p>
       </div>
     </div>
   </div>










</Card>






        </MainSection>

 
      </MainContainer>


    
    </div>
 
    </>
  )
};

export default HomePage;




const Card = styled.div`


margin-bottom: 50px;



.column {
    display: flex;
    justify-content:space-evenly;
    align-items: center;
    
  }

 

 

  .badge{
    margin-left: 100px;
    font-size: 13px;
  }
  .card {
    box-shadow: 8px 8px 6px gray;
    margin-top: 40px;
    cursor: pointer;
   
  
  }
  h5 {
   
    margin-top: 10px;
    font-family: "Ms Madi", cursive;
  }
  p {
    float: left;
    color: gray;
    font-size: 15px;
  }


`;


const MainSection = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  margin-top: 100px;
  


  .head1{
    margin-bottom: 45px;
  }

.head2{
    margin-top: 95px;
}


h2{
    margin-bottom:30px;
}
.Items{
    display: flex;
    justify-content: space-around;
    position: relative;
}  

.text{
 
    
}
.photo{
    border-radius: 10%;
    cursor: pointer;
}


`;


const MainContainer = styled.div`
  position: relative;


  img{
  
  transition-duration: 0.3s;
  
}



img:hover{
    padding: 12px;

}



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
  .nav-Search{
               display: flex;
               width:620px;
               height: 40px;
               border-radius: 10px;
               justify-content: space-evenly;
               transition-duration: 0.3s;
               border: none;
             
}


.nav-Search:hover{
               border: 2px solid #f44336;
}

.Select{
               border-top-left-radius: 10px;
               border-bottom-left-radius: 10px;
               width: 120px;
               border: none;
               text-align: center;
               background-color:#f3f3f3;
}
.input{
               width: 100%;
               font-size: 0.9rem;
               border: none;
               outline: none;
             
}
.icon{
               color:white;
               width:45px;
               display: flex;
               justify-content: center;
               align-items: center;
               font-size: 1.2rem;
               cursor: pointer;
               background-color:#f44336;
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

  cursor: pointer;

  &:hover {
    background-color: #f44336;
    color: white;
  }
`;

const Outline = styled.button`
  background-color: white; /* Green */
  border: none;
  color: black;
  width: 120px;
  height: 40px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  transition-duration: 0.4s;
  margin-left: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f44336;
    color: white;
  }
`;
