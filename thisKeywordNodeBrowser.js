// console.log(this); // this command in node wrt non-strict mode O/P: {}

// function() {
//     console.log(this);
// }
// objFn = function() {
//     console.log(this);

// }

// function showThis() {
//     console.log(this);
// }
// showThis();

// function showThis() {
//         console.log(this);

//     }
//     showThis();

// this command in node wrt strict mode

'use strict'
// console.log(this);

//this keyword in a function??

// function showThis() {
//     console.log(this);
// }
// showThis();

// let obj = {
//     name: 'Samin',
//     f: function() {
//         console.log(this)
//     }
// }
// obj.f();

//obj-fn-fn

// let obj = {
//     name: 'Samin',
//     f: function() {
//         function g() {
//             console.log(this);
//         }
//         g();
//     }
// }
// obj.f();