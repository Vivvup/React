
import React, { useState } from "react";

const AuthContext = React.createContext({
  loggedIn: false,
  onLogin: () => {}
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(getLoggedInFromSS());
function getLoggedInFromSS() {
    return sessionStorage.getItem("loggedIn");
  }

  function loginHandler() {
    sessionStorage.setItem("loggedIn", true);
    setIsLoggedIn(true);
  }

  function logoutHandler () {
         sessionStorage.removeItem('loggedIn');
         setIsLoggedIn(false);
  }

  return (
    <AuthContext.Provider value={{
      loggedIn: isLoggedIn,
      onLogin: loginHandler,
      onLogout: logoutHandler
    }}>
      {props.children}
    </AuthContext.Provider>
  )
} 

export default AuthContext;

