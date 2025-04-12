import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface AuthContextProps {
  user: any;
  login: (userData: any) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      // Verificar si el token ha expirado
      const expirationTime = parsedUser?.expires_at; // Timestamp exacto de expiración
      if (expirationTime && Date.now() > expirationTime) {
        console.warn("Token expirado. Redirigiendo a login...");
        logout();
        return;
      }

      setUser(parsedUser);
      if (location.pathname === "/auth") {
        navigate("/");
      }
    } else if (location.pathname !== "/auth") {
      navigate("/auth");
    }
  }, [location.pathname, navigate]);

  const login = (userData: any) => {
    const expiresAt = Date.now() + userData.expires_in * 1000; // Guardar la fecha exacta de expiración
    const userWithExpiration = { ...userData, expires_at: expiresAt };

    localStorage.setItem("user", JSON.stringify(userWithExpiration));
    setTimeout(() => {
      setUser(userWithExpiration);
    }, 1000);
    navigate("/");
  };

  const logout = () => {
    localStorage.removeItem("user");
    setTimeout(() => {
      setUser(null);
    }, 200);
    navigate("/auth");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe usarse dentro de un AuthProvider");
  }
  return context;
};
