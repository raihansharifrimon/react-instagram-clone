import React from "react";
import { ContextProvider } from "../Global/Context";

const Model = () => {
  const {model, closeModel, register, login} = React.useContext(ContextProvider);
  const [state, setState] = React.useState({
      register: true,
      login: false
  });

  const [inputs, setInputs] = React.useState({
      username: '',
      email: '',
      password: ''
  });

  const handleInput = (e)=> {
      setInputs({
          ...inputs, [e.target.name]: e.target.value
      });
  }

  const formsTogle = () => {
    setState({
          ...state,
          register: !state.register,
          login: !state.login
      })
  };
  const closeForm = e => {
      const className = e.target.getAttribute('class');
      if (className === 'model') {
          closeModel();
      }
  };
//   user register
  const registerUser = (e) => {
      e.preventDefault();
      register(inputs)
  }

//   user login 
  const userLogin = (e) => {
    e.preventDefault();
    login(inputs);
  }

  return (
    <>
      {model ? (
        <div className="model" onClick={closeForm}>
          <div className="model__container">
              {state.register ? <div className="model__form">
              <form onSubmit={registerUser}>
                <div className="model_group">
                  <img src="/images/logo.png" alt="" />
                </div>
                <div className="model__group">
                  <input
                    type="text"
                    name="username"
                    className="model_input"
                    placeholder="Usernme"
                    onChange={handleInput}
                    value={inputs.username}
                    required
                  />
                </div>
                <div className="model__group">
                  <input
                    type="email"
                    name="email"
                    className="model_input"
                    placeholder="Email"
                    onChange={handleInput}
                    value={inputs.email}
                    required
                  />
                </div>
                <div className="model__group">
                  <input
                    type="password"
                    name="password"
                    className="model_input"
                    placeholder="Create Password"
                    onChange={handleInput}
                    value={inputs.password}
                    required
                  />
                </div>
                <div className="model__group">
                  <input
                    type="submit"
                    value="Register"
                    className="btn btn-smart"
                  />
                </div>
                <div className="model__group">
                  <span onClick={formsTogle}>Already have an account ?</span>
                </div>
              </form>
            </div> : <div className="model__form">
              <form onSubmit={userLogin}>
                <div className="model_group">
                  <img src="/images/logo.png" alt="" />
                </div>
                <div className="model__group">
                  <input
                    type="email"
                    name='email'
                    className="model_input"
                    placeholder="Email"
                    onChange={handleInput}
                    value={inputs.value}
                    required
                  />
                </div>
                <div className="model__group">
                  <input
                    type="password"
                    name="password"
                    className="model_input"
                    placeholder="Password"
                    onChange={handleInput}
                    value={inputs.password}
                    required
                  />
                </div>
                <div className="model__group">
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-smart"
                  />
                </div>
                <div className="model__group">
                  <span onClick={formsTogle}>Create a new account ?</span>
                </div>
              </form>
            </div>}
            
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Model;
