import axiosOriginal from "axios";

export const axiosDigital = axiosOriginal.create({
    //  baseURL: "http://localhost:3000" //SERVIDOR DE PRODUCCION
    baseURL: "https://ciudaddigital.smt.gob.ar:2000", // BACK-DERIVADOR
  });
  