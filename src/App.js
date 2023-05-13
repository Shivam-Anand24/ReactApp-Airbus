import Login from "./components/Login";
import Dashboard from "./pages/dashboard";
import Layout from "./components/Layout";
import Missing from "./components/Missing";
import Unauthorized from "./components/Unauthorized";
import RequireAuth from "./components/RequireAuth";
import Fabrication from "./pages/Fabrication";
import { Routes, Route } from "react-router-dom";
import Monitor from "./pages/Monitor";
import Assembly from "./pages/Assembly";
import Subassembly from "./pages/SubAssembly";

const ROLES = {
  Officer: 1,
  Fabrication: 2,
  Subassembly: 3,
  Assembly:4,
  
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Officer]} />}>
          <Route path="/" element={<Dashboard />}>
          
          </Route>
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Officer,ROLES.Fabrication]} />}>
        <Route path="fabrication" element={<Fabrication />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Officer]} />}>
        <Route path="monitor" element={<Monitor />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Officer,ROLES.Subassembly]} />}>
        <Route path="subassembly" element={<Subassembly />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Officer,ROLES.Assembly]} />}>
        <Route path="assembly" element={<Assembly />} />
        </Route>
       
        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
