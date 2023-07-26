import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/Home/Home";
import Error from "./pages/ErrorPage/Error";
import User from "./pages/login/User";
import Navbar from "./components/Navbar";
import AppLayout from "./components/AppLayout";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* nested routes starts */}
          <Route element={<AppLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* nested routes ends */}

          <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
