import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";

function App() {
  return (
    <>
      <li>
        <Link to="/">홈으로</Link>
      </li>
      <li>
        <Link to="/about">소개</Link>
      </li>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/info" element={<About />}></Route> */}
        {/* <Route path={["/about", "/info"]} element={<About />}></Route> */}
        <Route path="/profile/:username" element={<Profile />}></Route>
      </Routes>
    </>
  );
}

export default App;
