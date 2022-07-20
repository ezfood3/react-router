import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>소개</h1>
      <p>안녕하세요.</p>
      <Link to="/">홈으로</Link>
    </div>
  );
};

export default About;
