import React, { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);
  const [lastActivityTime, setLastActivityTime] = useState(new Date());

  const login = (token) => {
    setIsAuth(true);
    setToken(token);
  };
  const logout = () => {
    setIsAuth(false);
    setToken("");
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentTime = new Date();
      const diff = currentTime.getTime() - lastActivityTime.getTime();
      const minutesElapsed = Math.floor(diff / (1000 * 60));
      if (minutesElapsed >= 1) {
        logout();
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [lastActivityTime]);

  const handleActivity = () => {
    setLastActivityTime(new Date());
  };
  console.log(lastActivityTime);
  return (
    <AuthContext.Provider
      value={{ login, logout, isAuth, token, handleActivity }}
    >
      {children}
    </AuthContext.Provider>
  );
}
