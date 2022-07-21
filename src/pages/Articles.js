import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <>
      <div>
        <Outlet></Outlet>
        <ul>
          <ArticlesItem id={1}></ArticlesItem>
          <ArticlesItem id={2}></ArticlesItem>
          <ArticlesItem id={3}></ArticlesItem>
        </ul>
      </div>
    </>
  );
};

const ArticlesItem = (props) => {
  const { id } = props;
  const myStyle = {
    backgroundColor: "red",
    color: "blue",
    fontSize: 24,
    fontWeight: "bold",
  };
  return (
    <>
      <li>
        <NavLink
          to={`/articles/${id}`}
          style={({ isActive }) => (isActive ? myStyle : undefined)}
        >
          게시글 {id}
        </NavLink>
      </li>
    </>
  );
};
export default Articles;
