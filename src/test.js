const func = require('../lib').default;

console.assert(func('00:00:00', false) === '12:00 am');
console.assert(func('04:30:00', false) === '4:30 am');
console.assert(func('07:04:00', false) === '7:04 am');
console.assert(func('13:00:00', false) === '1:00 pm');
console.assert(func('23:00:00', false) === '11:00 pm');
console.assert(func('23:05:00', false) === '11:05 pm');
console.assert(func('23:10:00', false) === '11:10 pm');

console.assert(func('11:15:00', true) === '11:15 AM');
console.assert(func('13:15:00', true) === '1:15 PM');
console.assert(func('17:15:00', true) === '5:15 PM');
console.assert(func('23:59:00', true) === '11:59 PM');
console.log('✅ All tests passing.');
