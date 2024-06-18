import React, { useEffect, useState } from "react";
import "./CiDiTuc.css";
import logoNav from "../assets/Logo-completo-muni.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import login from "../assets/login.png";
import damian from "../assets/Damian.jpeg";
import registro from "../assets/Registro.png";
// import { useNavigate } from "react-router-dom";

const CiDiTuc = () => {
  // const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <img src={damian} alt="" className="damian" />
      <div className="w-100">
        <div className={`navBarCont ${scrolled ? "scrolled" : ""}`}>
          <img src={logoNav} alt="logo nav" />
          <div className="navBar">
            <a href="#que-es">¿Qué es CiDiTuc?</a>
            <a href="#como-accedo">¿Cómo accedo?</a>
            <a href="#como-registro">¿Cómo accedo?</a>
            <Button className="btn">Ingresar a CiDiTuc</Button>
          </div>
        </div>
      </div>
      <section id="que-es" className=" queEs">
        <div className="">
          <h1>¿Qué es CiDiTuc?</h1>
          <p>
            Ciudad Digital es una plataforma tecnológica que posibilita a los
            ciudadanos acceder de forma simple, en un único lugar y con una
            misma cuenta de usuario a los trámites y servicios digitales que
            brinda la ciudad de San Miguel de Tucumán. Descubrí todos los
            servicios y beneficios de ser un Ciudadano Digital.
          </p>
        </div>
      </section>
      <section id="como-accedo" className=" row comoAccedo">
        <div className="col-md-4 col-12">
          <img src={login} alt="login" />
        </div>
        <div className="col-md-8 col-12 comoAccedoContenido">
          <h1>¿Cómo ingreso?</h1>
          <p>
            Para ingresar solo debes buscar y hacer click en la opción INGRESAR
            en el Portal de la Ciudad de San Miguel de Tucumán en smt.gob.ar, lo
            que te llevará a la siguiente pantalla:
            <p className="mt-3">
              1) Si ya estás registrado, ingresa tu CUIL; Contraseña y presiona
              INGRESAR
            </p>
            <p>2) Si aún no te registraste presiona REGISTRARSE</p>
            <p>
              3) Si estás registrado, pero no recuerdas como acceder, ingresa a
              ¿OLVIDÓ SU CLAVE?
            </p>
            <p>
              4) Si ya te registraste, pero no pudiste validarte aún, presiona
              REENVIAR EMAIL DE VALIDACION
            </p>
          </p>
          <Button className="btn" href="https://ciudaddigital.smt.gob.ar/">
            Ingresar a CiDiTuc
          </Button>
        </div>
      </section>
      <section id="como-registro" className="row comoRegistro">
        <img src={registro} alt="registro" className="col-md-6 col-12" />
        <div className="col-md-6 col-12">
          <h1>¿Cómo me registro como Ciudadano Digital?</h1>
          <p className="mt-4">
            Es muy sencillo, solo debes completar este formulario con los
            siguientes datos:
          </p>
          <div className="ms-2">
            <p className="mt-3"> - CUIL</p>
            <p> - Nombres</p>
            <p> - Apellidos</p>
            <p> - Género </p>
            <p> - Fecha de Nacimiento</p>
            <p> - Correo Electrónico Válido</p>
            <p> - Teléfono Celular</p>
            <p> - Calve de acceso</p>
            <p> - Leero y Aceptar los Términos y Condiciones</p>
          </div>
          <Button
            className="ms-2 btn"
            href="https://ciudaddigital.smt.gob.ar/#/registro"
          >
            Registrarte
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CiDiTuc;
