// การ Export Class จาก Module
// โหลด car
const {Car} = require('./car');
const myCar = new Car(2,"แดง","จักรยานยนต์");

console.log('รถคันนี้สี' + myCar.color);
console.log('รถคันนี้มี '+ myCar.wheel + ' ล้อ');
console.log('ประเภทรถ: ' + myCar.type);
