import React, { createContext, useEffect, useState } from "react";
import { axiosDigital } from "../config/axios";

export const CiDiTucContext = createContext();

const ProviderCiDiTuc = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState([]);

  //   const login = async (values) => {
  //     try {
  //       const { data } = await axios.post("/users/login", values);
  //       setAuthenticated(!!data.user);
  //       setUser(data.user);
  //       axios.defaults.headers.common["Authorization"] = data.token;
  //       localStorage.setItem("token", data.token);
  //     } catch (error) {
  //       toast.error(error.response?.data.message || error.message);
  //     }
  //   };

  const getAuth = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return setAuthenticated(false);
      }
      // Verifica que axiosDigital.defaults.headers y axiosDigital.defaults.headers.common existen
      // console.log(axiosDigital.defaults.headers);
      // Establece el encabezado Authorization
      axiosDigital.defaults.headers.common.Authorization = `${token}`;
      const { data } = await axiosDigital.get("/usuarios/authStatus");
      // console.log(data.usuarioSinContraseña.id_persona)
      setUser(data.usuarioSinContraseña);
      setAuthenticated(true);
      // console.log(user);
      // console.log(authenticated);
    } catch (error) {
      setAuthenticated(false);
      console.log(error);
      logout();
      console.error("Error de autenticación. Ingrese nuevamente");
    }
    setLoading(false);
  };

  useEffect(() => {
    getAuth();
  }, []);

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("tokenSet");
    const url = new URL(`https://ciudaddigital.smt.gob.ar?destino=CiDiTuc`); // IP BACK-DERIVADOR
    // const url = new URL(`http://localhost:5174`);
    url.searchParams.append("logout", true);
    window.open(url.toString(), "_self");
  };

  return (
    <CiDiTucContext.Provider
      value={{
        user,
        authenticated,
        setAuthenticated,
        loading,
        getAuth,
        setLoading,
        logout,
        selected,
        setSelected,
      }}
    >
      {children}
    </CiDiTucContext.Provider>
  );
};

export default ProviderCiDiTuc;
