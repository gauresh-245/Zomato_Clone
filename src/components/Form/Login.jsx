import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { IoMdClose } from "react-icons/io";


const Login = ({ isOpen, onClose, children, onBlur }) => {





    const [records, setRecords] = useState([]);
    const [LoginData,setLoginData] = useState(
      {
        email:"",
        password:""
      }
    );

  

    const handleInput = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log(name, value);



      setLoginData({ ...LoginData, [name] : value})


    };

    const handleSubmit = (e) => {
      e.preventDefault();  
      

     
      const newRecord = { ...LoginData, id: new Date().getTime().toString() };  // Corrected here
      console.log(records);

         setRecords([...records, newRecord]);
         console.log(records);
         setLoginData({email:"",password:""})
    }


  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("blur");
      onBlur(true);
    } else {
      onBlur(false);
      document.body.classList.remove("blur");
    }
    return () => {
      document.body.classList.remove("blur");
    };
  }, [isOpen, onBlur]);

  return (
    <>
      <GlobalStyle />
      {isOpen && (
        <div>
          <LoginForm>
            <div id="intro" className="bg-image shadow-2-strong">
              <div
                className="mask d-flex align-items-center h-screen"
                style={{ backgroundColor: "" }}
              >
                <div className="container">
                  <div className="row justify-content-center">
                    {" "}
                    <div className="col-xl-5 col-md-8">
                      <form className="bg-white rounded shadow-5-strong p-5" onSubmit={handleSubmit}>
                        {/* Email input */}
                        <div className="form-outline mb-2" data-mdb-input-init>
                          <IoMdClose
                            onClick={onClose}
                            className="icon"
                          ></IoMdClose>

                          <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            className="form-control"
                            onChange={handleInput}
                            value={LoginData.email}
                            placeholder=" Email address"
                          />
                          <label className="form-label" htmlFor="email">
                           
                          </label>
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-2" data-mdb-input-init>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="off"
                            className="form-control"
                            onChange={handleInput}
                            value={LoginData.password}
                            placeholder=" Password"
                          />
                          <label className="form-label" htmlFor="password">
                           
                          </label>
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
                        <button onClick={onClose}
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
          </LoginForm>
        </div>
      )}
    </>
  );
};

export default Login;

const LoginForm = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;

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
