import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

const SignUp = ({ isSignUpOpen, CloseSignUp, Blur }) => {


  const[data, setData] = useState([]);
  const [SignupData, setSignUpData] = useState({
    firstname: "",
    lastname: "",
    email:"",
    password: "",
    confirmpassword: ""
  });



   const handleInput = (e) => {
     const name = e.target.name;
     const value = e.target.value;
     console.log(name,value);




     setSignUpData({ ...SignupData , [name] : value})
   }

     const  handleSubmit = (e) => {
        e.preventDefault();



        const newRecord = { ...SignupData, id: new Date().getTime().toString()}
        console.log(data);


        setData( [...data, newRecord])
        console.log(data)

        setSignUpData({firstname:"",lastname:"",email:"",password:"",confirmpassword:""})
   }



  useEffect(() => {
    if (isSignUpOpen) {
      document.body.classList.add("blur");
      Blur(true);
    } else {
      document.body.classList.remove("blur");
      Blur(false);
    }

    return () => {
      document.body.classList.remove("blur");
    };
  }, [isSignUpOpen, Blur]);

  return (
    <>
      <GlobalStyle />

      {isSignUpOpen && (
        <div>
          <SignUps>
            <div id="intro" className="bg-image shadow-2-strong">
              <div className="mask d-flex align-items-center h-100">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-xl-5 col-md-8">
                      <form className="bg-white rounded shadow-5-strong p-5" onSubmit={handleSubmit}>
                        {/* Email input */}
                        <div className="form-outline mb-2" data-mdb-input-init>
                          <IoMdClose
                            onClick={CloseSignUp}
                            className="icon"
                          ></IoMdClose>
                          <input
                            type="text"
                            id="firstname"
                            className="form-control"
                            name="firstname"
                            onChange={handleInput}
                            value={SignupData.firstname}
                            placeholder="FirstName"
                          />
                          <label
                            className="form-label"
                            htmlFor="firstname"
                          ></label>
                        </div>

                        <div className="form-outline mb-2" data-mdb-input-init>
                          <input
                            type="text"
                            id="lastname"
                            className="form-control"
                            name="lastname"
                            placeholder="LastName"
                            onChange={handleInput}
                            value={SignupData.lastname}
                          />
                          <label
                            className="form-label"
                            htmlFor="lastname"
                          ></label>
                        </div>


                        
                        <div className="form-outline mb-2" data-mdb-input-init>
                          <input
                            type="email"
                            id="email"
                            className="form-control"
                            name="email"
                            placeholder="Email-Address"
                            onChange={handleInput}
                            value={SignupData.email}
                          />
                          <label
                            className="form-label"
                            htmlFor="email"
                          ></label>
                        </div>

                        <div className="form-outline mb-2" data-mdb-input-init>
                          <input
                            type="text"
                            id="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                            onChange={handleInput}
                            value={SignupData.password}
                          />
                          <label
                            className="form-label"
                            htmlFor="password"
                          ></label>
                        </div>

                        {/* Password input */}
                        <div className="form-outline mb-2" data-mdb-input-init>
                          <input
                            type="confirmpassword"
                            id="confirmpassword"
                            className="form-control"
                            name="confirmpassword"
                            placeholder="Confirm password"
                            onChange={handleInput}
                            value={SignupData.confirmpassword}
                          />
                          <label
                            className="form-label"
                            htmlFor="confirmpassword"
                          ></label>
                        </div>
                        {/* 2 column grid layout for inline styling */}
                        <div className="row mb-4">
                          <div className="col d-flex justify-content-center">
                            {/* Checkbox */}
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue
                                id="form1Example3"
                                defaultChecked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="form1Example3"
                              >
                                Remember me
                              </label>
                            </div>
                          </div>
                          <div className="col text-center">
                            {/* Simple link */}
                            <a href="#!">Forgot password?</a>
                          </div>
                        </div>
                        {/* Submit button */}
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          data-mdb-ripple-init
                        >
                          Sign in
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SignUps>
        </div>
      )}
    </>
  );
};

export default SignUp;

const SignUps = styled.div`
  position: absolute;
  top: 5%;
  width: 100%;
  z-index: 1;

  .icon {
    font-size: 30px;
    cursor: pointer;
    align-self: end;
    right: 4%;

    position: absolute;
    top: 1%;
  }
`;

const GlobalStyle = styled.div`
  .blur {
    filter: blur(8px);
    pointer-events: none;
  }
`;
