// module
import { Routes, Route } from "react-router-dom";

// components
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Template from "./components/templates/Main";
import TemplateProfile from "./components/templates/Profile";
import Profile from "./components/profile/Profile";
import Post from "./components/templates/Post";
import PostDetail from "./components/post/postDetail";
import Verify from "./components/verifyUser/verify";
import VerifyLogin from "./components/verifyUser/verifyLogin";

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <Routes>
        <Route element={<Verify />}>
          <Route element={<Template />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route element={<TemplateProfile />}>
            <Route path="/:idUser" element={<Profile />} />
          </Route>
          <Route element={<Post />}>
            <Route path="/post/:post" element={<PostDetail />} />
          </Route>
        </Route>
        <Route element={<VerifyLogin />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
}

export default App