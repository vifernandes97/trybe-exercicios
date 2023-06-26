const format = require('date-fns/format');

const date = new Date();

const formatDate = format(date, 'dd/MM/yyyy');
console.log(formatDate)