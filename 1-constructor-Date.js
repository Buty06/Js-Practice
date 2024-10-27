import {
  numeroAleatorio,
  raizDeDumero,
  redondearNumero,
  valoMinMax,
} from "./constructor-Math.js";
import { convinarAndOr, evaluarConAnd, evaluarConOr, valorMaximoInfinito } from "./cortocircuito.js";
import { agrupacionDeElementos, sumaDeArgumentosInfinitos } from "./operador-rest.js";

redondearNumero(13.6);
numeroAleatorio();
raizDeDumero(64);
valoMinMax(12, 4, 100, -10, 6, 22, 33, 12);
evaluarConAnd(null, "MM");
evaluarConOr(true, "MM");
convinarAndOr(19, "Mami", "p", "MM");
sumaDeArgumentosInfinitos(12, 3, 4, 5);
agrupacionDeElementos(['(Primer Elemento Aquí)',false,12, 3, 'Mamasita', 23, true, 'belleza'])
valorMaximoInfinito(1, 3, 2, 66, 32, 54, 77, 100, 23, 104, 245)

// //Ejercicio-1: Crea una instancia de Date que repredente la fecha y hora actuales y muestrala

// const traerFecha = () => {
//   const fechaActual = new Date();
//   console.log(fechaActual.toLocaleString());
// };

// traerFecha();

// //Ejercicio-2: Crea una instancia de Date que represente una fecha específica (por ej: 1 de enero de 2000)

// const traerFechaEspecifica = (
//   anio = "no dado",
//   mes = "no dado",
//   dia = "no dado"
// ) => {
//   const fechaEspecifica = new Date(anio, mes - 1, dia);
//   console.log(fechaEspecifica.toLocaleDateString());
// };

// traerFechaEspecifica(2000, 1, 1);

// //Ejercicio-3: Extrae y muestra el año, mes y día de una fecha específica utilizando los métodos getFullYear(), getMonth(), y getDate()

// const extraerFecha = (anio = "no dado", mes = "no dado", dia = "no dado") => {
//   const fecha = new Date(anio, mes, dia);
//   console.log(
//     `El año es ${fecha.getFullYear()} el mes es ${
//       fecha.getMonth() - 1
//     } y el día es ${fecha.getDate()}`
//   );
// };

// extraerFecha(2000, 4, 25);

// //Ejercicio-4: Crear dos fechas diferentes y compararlas para determinar cual es más reciente.
// const comparacionDeFechas = (anio1, anio2) => {
//   const primerFecha = new Date(anio1, 0, 1).getTime();
//   const segundaFecha = new Date(anio2, 0, 1).getTime();

//   const masReciente =
//     primerFecha > segundaFecha
//       ? primerFecha + " es más reciente"
//       : segundaFecha + " es más reciente";

//   console.log(masReciente);
// };

// comparacionDeFechas(2000, 1850);

// const comparacionDeDias = () => {
//   const primerFecha = new Date(2009, 0, 1);
//   const segundaFecha = new Date(2008, 0, 1);

//   const diferenciaDeFechas = Math.abs(primerFecha - segundaFecha);

//   console.log(diferenciaDeFechas);
// };

// comparacionDeDias();

// const formatearFecha = () => {
//   fecha = new Date().toLocaleDateString();
//   console.log(fecha);
// };

// formatearFecha();

// do {
//   const obtenerDiaDeLaSemana = (dia, mes, anio) => {
//       let fecha;

//       try {
//         if (anio && mes && dia) {
//           fecha = new Date(anio, mes - 1, dia).getDay() + 1;
//         } else {
//           throw new Error(
//             "Necesito que pongas el día, mes y año separado por coma con números y en ese orden"
//           );
//         }
//       } catch (error) {
//         const confirmacion = confirm(error);

//         if (!confirmacion) {
//           alert("Pues nunca funcionará");
//           breack
//         }
//       }

//       let diaDeLaSemana;

//       switch (fecha) {
//         case 1:
//           diaDeLaSemana = "Domingo";
//           break;
//         case 2:
//           diaDeLaSemana = "Lunes";
//           break;
//         case 3:
//           diaDeLaSemana = "Martes";
//           break;
//         case 4:
//           diaDeLaSemana = "Miércoles";
//           break;
//         case 5:
//           diaDeLaSemana = "Jueves";
//           break;
//         case 6:
//           diaDeLaSemana = "Viernes";
//           break;
//         case 7:
//           diaDeLaSemana = "Sábado";
//           break;
//       }

//       if (diaDeLaSemana) {
//         alert(`Naciste un ${diaDeLaSemana}`);
//         breack
//       }
//     };

//     alert(
//       "Este es un ejercicio que te da el día de la semana segun la fecha que le pongas"
//     );
//     const [dia, mes, anio] = prompt(
//       "Escribeme el día, mes y año con números y separados por comas"
//     ).trim().split(",");

//     obtenerDiaDeLaSemana(dia, mes, anio);
// } while (true);
