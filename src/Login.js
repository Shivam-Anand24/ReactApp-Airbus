import { useState } from "react";

import LoginForm from "./components/loginForm";

const Login = () => {
  const [success, setSuccess] = useState(false);

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <LoginForm setSuccess={setSuccess} />
      )}
    </>
  );
};

export default Login;
