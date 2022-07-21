import React from "react";
import { Navigate } from "react-router-dom";

const MyPage = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return <div>마이 페이지 입니다</div>;
};

export default MyPage;
