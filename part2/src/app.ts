// import { hi } from './m.js'
let a = 10;
// console.log(hi)

function fn2(this: Window) {
    alert(this)
}

let box1 = document.getElementById('box1');
if (box1 !== null) {
    box1.addEventListener('chick', function () {
        alert('hello');
    })
}
box1?.addEventListener('chick', function () {
    alert('hello');
})
