import { useState } from "react";
import CiDiTuc from "./components/CiDiTuc";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./common/NavBar";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  // const url = new URL(window.location.href);
  // const token = url.searchParams.get("auth");

  // url.searchParams.delete("auth");
  // history.replaceState(null, "", url.toString());
  // // Verificar si el token está presente en la URL y si aún no se ha guardado en el localStorage
  // if (token && !localStorage.getItem("tokenSet")) {
  //   localStorage.setItem("token", token);
  //   localStorage.setItem("tokenSet", "true"); // Establecer la bandera
  //   // url.searchParams.delete("auth");
  //   // window.history.replaceState(null, "", url.toString());
  // }
  // if (localStorage.getItem("token") == null) {
  //   localStorage.removeItem("tokenSet");
  //   // console.log(token);
  //   // const url = new URL(`http://localhost:5174`); // IP BACK-DERIVADOR
  //   const url = new URL(`http://localhost:5173/home`);
  //   url.searchParams.append("logout", false);
  //   // window.open(url.toString(), "_self"); // IP BACK-DERIVADOR
  //   window.location.href = url.toString();
  // }

  return (
    <HashRouter>
      <Routes>
        <Route exact path="/*" element={<CiDiTuc />} />
        <Route
          exact
          path="/home"
          element={
            // <PrivateRoutes>
            <>
              <NavBar />
              <Home />
            </>
            // </PrivateRoutes>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
