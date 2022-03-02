const moment = require('moment');

const birth = "15/03/1986"
const now = moment().format("DD/MM/YYYY");
const diffDays = moment(now, "DD/MM/YYYY").diff(moment(birth, "DD/MM/YYYY"),'days');
const diffYear = moment(now, "DD/MM/YYYY").diff(moment(birth, "DD/MM/YYYY"),'year');

console.log(`Hoy es: ${now}\nNaci el: ${birth}\nDesde mi nacimiento pasaron ${diffYear} anios\nDesde mi nacimiento pasaron ${diffDays} dias`);