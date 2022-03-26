// console.log(this);  // returns windows

// function showThis() {
//     console.log(this);
// }
// showThis();

// obj-fn in browser

let obj = {
    name: "Ahmad",
    b: function() {
        console.log(this);

    }
}
obj.b();