import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

//Commented code is used to do the same function without useContext hook

export const AppContext = createContext(null);

const ContextTutorial = () => {
  let [username, setUserName] = useState("");
  return (
    <div>
      {/* <Login setUserName={setUserName} />
      <User username={username} /> */}
      <AppContext.Provider value={{ username, setUserName }}>
        <Login />
        <User />
      </AppContext.Provider>
    </div>
  );
};

export default ContextTutorial;
