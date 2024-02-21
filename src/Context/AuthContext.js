import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  user: null,
  setUser: () => {},
  role: null,
  setRole: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    setRole(storedRole);
  }, []);

  const handleLogin = (userData, userRole) => {
    setUser(userData);
    setRole(userRole);
    localStorage.setItem('role', userRole);
  };

  const handleLogout = () => {
    setUser(null);
    setRole(null);
    localStorage.removeItem('role');
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, role, setRole, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
