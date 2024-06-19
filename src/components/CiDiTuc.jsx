import React, { useEffect, useState } from "react";
import "./CiDiTuc.css";
import logoNav from "../assets/Logo-completo-muni.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import login from "../assets/login.png";
import damian from "../assets/Damian.jpeg";
import registro from "../assets/Registro.png";
// import { useNavigate } from "react-router-dom";
import restablecerClave from "../assets/restablecer-clave.png";
import reenviarMail from "../assets/reenviar-mail.png";

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
      <div className="">
        <div className={`navBarCont ${scrolled ? "scrolled" : ""}`}>
          <img src={logoNav} alt="logo nav" />
          <div className="navBar">
            <a href="#que-es">¿Qué es CiDiTuc?</a>
            <a href="#como-accedo">¿Cómo accedo?</a>
            <a href="#como-registro">¿Cómo me registro?</a>{" "}
            <a href="#terminos-condiciones">Terminos y Condiciones</a>{" "}
            <a href="#reestablecer-clave">Restablecer Contraseña</a>
            <Button className="btn">Ingresar a CiDiTuc</Button>
          </div>
        </div>
      </div>
      <section id="que-es" className=" queEsSecction">
        <div className="queEs">
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
      <section id="como-accedo" className=" comoAccedo">
        <div className="col-md-4 col-12 d-flex justify-content-center">
          <img src={login} alt="login" />
        </div>
        <div className="col-md-8 col-12 comoAccedoContenido">
          <h1 className="aa">¿Cómo ingreso?</h1>
          <p className="aa">
            Para ingresar solo debes buscar y hacer click en la opción INGRESAR
            en el Portal de la Ciudad de San Miguel de Tucumán en smt.gob.ar, lo
            que te llevará a la siguiente pantalla:
            <p className="mt-3 aa">
              1) Si ya estás registrado, ingresa tu CUIL; Contraseña y presiona
              INGRESAR
            </p>
            <p className="aa">
              2) Si aún no te registraste presiona REGISTRARSE
            </p>
            <p className="aa">
              3) Si estás registrado, pero no recuerdas como acceder, ingresa a
              ¿OLVIDÓ SU CLAVE?
            </p>
            <p className="aa">
              4) Si ya te registraste, pero no pudiste validarte aún, presiona
              REENVIAR EMAIL DE VALIDACION
            </p>
          </p>
          <Button className="btn" href="https://ciudaddigital.smt.gob.ar/">
            Ingresar a CiDiTuc
          </Button>
        </div>
      </section>
      <section id="como-registro" className=" comoRegistro">
        <div className="col-md-6 col-sm-12 col-12 d-flex flex-column justify-content-center">
          <h1>¿Cómo me registro como Ciudadano Digital?</h1>
          <p className="mt-4 subt">
            Es muy sencillo, solo debes completar este formulario con los
            siguientes datos:
          </p>
          <div className="ms-2 comoRegistroContenido">
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
            className="btn col-sm-4 "
            href="https://ciudaddigital.smt.gob.ar/#/registro"
          >
            Registrarte
          </Button>
        </div>
        <div className="col-md-6 col-sm-12 col-12 d-flex justify-content-center">
          <img src={registro} alt="registro" />
        </div>
      </section>
      <section id="terminos-condiciones" className=" terminosCondiciones">
        <div className=" col-12 d-flex flex-column justify-content-center">
          <div>
            <h1>
              ¿Cuáles son los Términos y Condiciones del Ciudadano Digital de
              SMT?
            </h1>
            <p className="mt-4">
              Lee con atención, ya que es un requisito fundamental para que
              puedas registrarte, la aceptación de los mismos.
            </p>
          </div>
          <div className=" terminosCondicionesContenido">
            <div>
              <h1>INFORMACIÓN RELEVANTE</h1>
              <p className="mt-4">
                Es requisito necesario para acceder a este sitio oficial de la
                Municipalidad de San Miguel de Tucumán a que el usuario lea y
                acepte los siguientes Términos y Condiciones que a continuación
                se redactan.
              </p>{" "}
            </div>
            <div>
              <h1>CIUDADANO DIGITAL</h1>
              <p className="mt-4">
                El acceso a la página requiere el registro del usuario causante
                como ciudadano digital, para ello deberán consignarse datos
                personales tales como: nombre, apellido, cuil, mail, género,
                fecha de nacimiento, número de celular y clave de usuario, la
                cual deberá ser generada por el usuario. Cabe destacar que la
                clave generada por el usuario es intransferible, toda vez que
                será encriptada y el municipio no podrá tener acceso a ella, por
                lo cual no asumirá la responsabilidad en caso de extravío,
                olvido o utilización de la clave por terceros. La registración
                exitosa implicará que el usuario ha leído y aceptado los
                Términos y Condiciones de Acceso en el presente documento, el
                cual tendrá el carácter de Declaración Jurada. A partir de su
                registración el ciudadano digital queda habilitado para acceder
                al sitio web de la Municipalidad y realizar diferentes trámites,
                los mismos están sujetos a un proceso de confirmación,
                verificación y validación. En algunos casos puede que se
                requiera una verificación por medio de correo electrónico.
              </p>{" "}
            </div>
            <div>
              <h1>USO NO AUTORIZADO</h1>
              <p className="mt-4">
                Queda prohibido transferir el nombre de usuario y contraseña a
                un tercero para realizar cualquier tipo de trámite, toda vez que
                el carácter de ciudadano digital es intransferible. En tal caso
                no da derecho al usuario a iniciar reclamo alguno contra el
                Municipio.
              </p>
            </div>
            <div>
              <h1>MULTAS Y NOTIFICACIONES</h1>
              <p className="mt-4">
                El ciudadano digital acepta que el medio de notificación legal
                fehaciente de la multa/sanción como consecuencia de alguna
                violación y/o incumplimiento, debidamente comprobado y
                tipificado en el Código de Faltas Municipal - Ordenanza 758/82-
                será el mail registrado oportunamente en esta página.
                Entendiéndose como fecha cierta de notificación, la fecha de
                envío de notificación vía mail desde el municipio al
                destinatario (ciudadano digital).
              </p>
            </div>
            <div>
              <h1>PRIVACIDAD</h1>
              <p className="mt-4">
                La información personal requerida a los fines de la registración
                del ciudadano digital, cuenta con la seguridad necesaria,
                conforme la normativa vigente Ley Nº 25.326 de datos personales.
                Los datos ingresados por el usuario no serán entregados a
                terceros, salvo que deba ser revelada en cumplimiento a una
                orden judicial o requerimiento legal.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="reestablecer-clave" className=" restablecerClave">
        <div className="col-md-6 col-sm-12 col-12 d-flex flex-column ">
          <h1>
            ¿Cómo reestablezco mi clave para ingresar como Ciudadano Digital?
          </h1>
          <div>
            <p className="mt-4">
              Si no recuerdas como acceder a tu cuenta de Ciudadano Digital
              presiona ¿Olvidó su Clave? y te solicitará ingreses el email o
              correo electrónico registrado.
            </p>
            <p>
              Luego debes ir a tu correo y seguir las instrucciones que te
              fueron enviadas y listo.
            </p>
          </div>
          <div className=" col-12 d-flex justify-content-center">
            <img src={restablecerClave} alt="Restablecer Contraseña" />
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-12 d-flex flex-column ">
          <div>
            <h1>¿Si no recibí el correo de validación</h1>
            <h1>o no lo encuentro?</h1>
          </div>
          <div>
            <p className="mt-4">
              Al momento de la registración, recibes en tu correo electrónico un
              mail que permite validar el mismo, recuerda siempre revisar tu
              Carpeta de Correo No Deseado. Si no lo tienes, o lo borraste,
              puedes recuperarlo ingresando a Reenviar email de validación, con
              tu CUIL y CORREO.
            </p>
            <p>
              Luego debes ir a tu bandeja de entrada y seguir las instrucciones
              que te fueron enviadas.
            </p>
          </div>
          <div className=" col-12 d-flex justify-content-center">
            <img src={reenviarMail} alt="Reenviar Mail" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default CiDiTuc;
