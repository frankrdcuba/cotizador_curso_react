import React from "react";
import { primerMayuscula } from "../helper";
import PropTypes from "prop-types";

import styled from "@emotion/styled";
const Resumen = ({ datos }) => {
  const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
  `;

  const { marca, anno, plan } = datos;

  if (marca === "" || anno === "" || plan === "") return null;
  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <li>Marca: {primerMayuscula(marca)}</li>
        <li>Plan: {primerMayuscula(plan)}</li>
        <li>Año del auto: {anno}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};

export default Resumen;
