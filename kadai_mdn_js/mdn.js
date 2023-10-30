const newdate = new Date([2023,8,22]);
var year = newdate.getFullYear();
var month = newdate.getMonth()+1;
var day = newdate.getDate();

console.log(year+"年"+month+"月"+day+"日");