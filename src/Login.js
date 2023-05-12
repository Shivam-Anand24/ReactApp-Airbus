import { useState } from "react";

import LoginForm from "./components/loginForm";
import Dashboard from "./pages/dashboard";

const Login = () => {
  const [success, setSuccess] = useState(true);

  return <>{success ? <Dashboard /> : <LoginForm setSuccess={setSuccess} />}</>;
};

export default Login;