import { createContext, useContext, useEffect, useState } from "react";

import { apiRequest } from "../lib/api";

const AuthContext = createContext(null);

function getStoredAuth() {
  return {
    token: localStorage.getItem("shikshasora_token"),
    user: JSON.parse(localStorage.getItem("shikshasora_user") || "null"),
  };
}

export function AuthProvider({ children }) {
  const [authState, setAuthState] = useState(() => ({
    ...getStoredAuth(),
    loading: true,
  }));

  useEffect(() => {
    async function bootstrap() {
      const stored = getStoredAuth();

      if (!stored.token) {
        setAuthState({ token: null, user: null, loading: false });
        return;
      }

      try {
        const response = await apiRequest("/auth/me", { token: stored.token });
        const user = response.data;
        localStorage.setItem("shikshasora_user", JSON.stringify(user));
        setAuthState({ token: stored.token, user, loading: false });
      } catch {
        localStorage.removeItem("shikshasora_token");
        localStorage.removeItem("shikshasora_user");
        setAuthState({ token: null, user: null, loading: false });
      }
    }

    bootstrap();
  }, []);

  const login = (payload) => {
    localStorage.setItem("shikshasora_token", payload.tokens.accessToken);
    localStorage.setItem("shikshasora_user", JSON.stringify(payload.user));
    setAuthState({
      token: payload.tokens.accessToken,
      user: payload.user,
      loading: false,
    });
  };

  const logout = () => {
    localStorage.removeItem("shikshasora_token");
    localStorage.removeItem("shikshasora_user");
    setAuthState({ token: null, user: null, loading: false });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }

  return context;
}
