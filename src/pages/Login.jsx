import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");

  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const [name, setName] = useState();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form className="min-h-[80vh] flex-items-center">
      <div>
        <p>{state == "Sign Up" ? "Create Account " : "Login"}</p>
        <p>
          Please {state == "Sign Up" ? "Sign Up" : "Login"} to book Appointment{" "}
        </p>
        <div>
          <p>Full Name </p>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div>
          <p>Email </p>
          <input
            type="email"
            onChange={(e) => setName(e.target.value)}
            value={email}
          />
        </div>

        <div>
          <p>Password </p>
          <input
            type="password"
            onChange={(e) => setName(e.target.value)}
            value={password}
          />
        </div>
      </div>
    </form>
  );
};

export default Login;
