import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useAuth } from "../auth";

const API_URL =
  import.meta.env.VITE_APP_API_URL || "https://kindagolden.pro/api";

const useAxios = (
  initialUrl = "",
  initialMethod = "GET",
  initialOptions = {}
) => {
  const [data, setData]: any = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [waiting, setWaiting] = useState(0);
  const [reloadFlag, setReloadFlag] = useState(0);

  const { auth, logout } = useAuth();

  const fetchData = useCallback(
    async (url: any, method = "GET", options = {}) => {
      setLoading(true);
      setWaiting((prev) => prev + 1);
      try {
        const response = await axios({
          url: `${API_URL}${url}`,
          method,
          headers: {
            Authorization: auth?.api_token ? `Bearer ${auth.api_token}` : "",
            "Content-Type": "application/json",
          },
          ...(method !== "GET" ? { data: options } : { params: options }),
        });

        setData(response.data);
        setError(null);
        return response;
      } catch (err: any) {
        if (err.response?.status === 401) {
          console.warn("Sesión expirada. Cerrando sesión...");
          logout();
        }
        setError(err);
        return null;
      } finally {
        setLoading(false);
        setWaiting((prev) => Math.max(0, prev - 1));
      }
    },
    [auth, logout]
  );

  const execute = async (url: any, method = "GET", options = {}) => {
    return await fetchData(url, method, options);
  };

  const reload = useCallback(() => {
    setReloadFlag((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (initialUrl) {
      fetchData(initialUrl, initialMethod, initialOptions);
    }
  }, [reloadFlag, fetchData]);

  return { data, error, loading, waiting, execute, reload };
};

export default useAxios;
