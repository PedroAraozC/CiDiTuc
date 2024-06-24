import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIdCard,
  faNewspaper,
  faFolderOpen,
} from "@fortawesome/free-regular-svg-icons";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card/Card";
import "./Home.css";

const Home = () => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };
  return (
    <div className="contPadre">
      <div className="cardsCont">
        <Card
          onClick={() => handleRedirect("https://boletinoficial.smt.gob.ar")}
          titulo={"Boletin Oficial"}
          descripcion={
            "Publicación Digital que contiene la normativa municipal y actos de gobierno"
          }
          Icono={<FontAwesomeIcon icon={faNewspaper} />}
        />
        <Card
          titulo={"Credencial"}
          descripcion={"Ingreso a credencial propia"}
          Icono={<FontAwesomeIcon icon={faQrcode} />}
        />
        <Card
          titulo={"Expedientes"}
          descripcion={"Ingreso a sistema de expedientes"}
          Icono={<FontAwesomeIcon icon={faFolderOpen} />}
        />
        <Card
          onClick={() => handleRedirect("https://turnos.smt.gob.ar")}
          titulo={"Licencia de Conducir"}
          descripcion={"Requsitos para Licencia de conducir"}
          Icono={<FontAwesomeIcon icon={faIdCard} />}
        />
      </div>
    </div>
  );
};

export default Home;
