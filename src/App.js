import Login from "./Login";
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Unauthorized from "./components/Unauthorized";
import Missing from "./components/Missing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route path="/" element={<Dashboard />} />

        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
