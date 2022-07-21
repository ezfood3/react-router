import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };
  const goArticles = () => {
    // redirection 구현
    navigate("/articles", { replace: true });
  };
  return (
    <>
      <div>
        <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
          <button onClick={goBack}>뒤로가기</button>
          <button onClick={goArticles}>게시글 목록</button>
          <ul>
            <li>
              <Link to="/">홈으로</Link>
            </li>
            <li>
              <Link to="/about">소개</Link>
            </li>
            <li>
              <Link to="/info?detail=true&mode=1">소개 (쿼리)</Link>
            </li>
          </ul>
          <hr></hr>
        </header>
        <main>
          <Outlet />
          {/* 다른 컴포넌트로 대체되는 부분 */}
        </main>
      </div>
    </>
  );
};

export default Layout;
