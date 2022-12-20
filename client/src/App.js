import Layout from "./components/Layout";
import Home from "./components/Home";
import Politic from "./components/Politic";
import Put from "./components/Put";
import Sport from "./components/Sport";
import { Routes, Route } from "react-router-dom";
import Signuppage from "./components/SignupPage";
import Signinpage from "./components/SigninPage";
function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Signuppage />} />
          <Route path="signin" element={<Signinpage />} />
          <Route path="sport" element={<Sport />} />
          <Route path="politic" element={<Politic />} />
          <Route path="put" element={<Put />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
