import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈페이지</h1>
      <p>홈페이지 작성중...</p>
      <ul>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/velopert">velopert의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/gildong">gildong의 프로필</Link>
        </li>
        <li>
          <Link to="/profile/void">존재하지 않는 프로필</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
