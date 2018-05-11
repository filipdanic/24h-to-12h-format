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

console.assert(func('23:59:00:0000 +020 GMT', true) === '11:59 PM');
console.assert(func('23:59:00+020GMT', true) === '11:59 PM');

console.assert(func('00:00:11', false, true) === '12:00:11 am');
console.assert(func('04:30:22', false, true) === '4:30:22 am');
console.assert(func('07:04:33', false, true) === '7:04:33 am');
console.assert(func('13:00:44', false, true) === '1:00:44 pm');
console.assert(func('23:00:55', false, true) === '11:00:55 pm');
console.assert(func('23:05:21', false, true) === '11:05:21 pm');
console.assert(func('23:10:12', false, true) === '11:10:12 pm');

console.assert(func('11:15:10', true, true) === '11:15:10 AM');
console.assert(func('13:15:20', true, true) === '1:15:20 PM');
console.assert(func('17:15:30', true, true) === '5:15:30 PM');
console.assert(func('23:59:40', true, true) === '11:59:40 PM');

console.assert(func('23:59:11:0000 +020 GMT', true, true) === '11:59:11 PM');
console.assert(func('23:59:41+020GMT', true, true) === '11:59:41 PM');

console.assert(func('23:59', true, true) === '11:59:00 PM');
console.assert(func('11:59', true, true) === '11:59:00 AM');
console.assert(func('04:19:24+030GMT', true, true) === '4:19:24 AM');

console.log('✅ All tests passing.');
