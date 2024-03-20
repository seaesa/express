import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Article from "./components/article/Article";
import Template from "./components/templates/Main";


import { Routes, Route, useNavigate } from "react-router-dom";
import TemplateProfile from "./components/templates/Profile";
import Profile from "./components/profile/Profile";
import { useUserContext } from "./context/UserContext";
import { useEffect } from "react";

export default function App() {
  const { user } = useUserContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate('/');
    else navigate('/login');
  }, [user]);

  return (
    <Routes>
      <Route element={<Template />}>
        <Route path="/" element={<Home />} />
        <Route path="/article" element={<Article />} />
      </Route>
      <Route element={<TemplateProfile />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
} 
