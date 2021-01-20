// Obtiene la diferencia de años
export function obtenerDiferenciaAnno(anno) {
  return new Date().getFullYear() - anno;
}

// Calcula el total a pagar segun la Marca
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    case "asiatico":
      incremento = 1.05;
      break;
    default:
      break;
  }
  return incremento;
}

//Calcula el tipo de seguro
export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

//Primer letra mayuscula de un texto
export function primerMayuscula(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}
