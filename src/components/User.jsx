import React from "react";
import { useContext } from "react";
import { AppContext } from "./ContextTutorial";

const User = () => {
  let { username } = useContext(AppContext);
  return <div>User: {username}</div>;
};

export default User;
