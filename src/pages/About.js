import React from "react";
import { Link, useSearchParams } from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onDetail = () => {
    setSearchParams({
      mode,
      detail: detail === "true" ? false : true,
    });
  };
  const onMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({
      detail,
      mode: nextMode,
    });
  };
  return (
    <div>
      <h1>소개</h1>
      <p>안녕하세요.</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onDetail}>Detail</button>
      <button onClick={onMode}>Mode</button>

      <Link to="/">홈으로</Link>
    </div>
  );
};

export default About;
