import { hi } from './m1'

function sum(a: number, b: number): number {
    return a + b;
}

const obj = { name: '孙悟空', age: 33 };

console.log(obj);

obj.age = 18;
console.log(obj);

console.log(sum(123, 456))
console.log('haha');
console.log(hi)

// 因为ie11没有Promise。所以此时配置的corejs就起作用了（引入corejs自己使用的Promise）。但也未必能执行。
console.log(Promise);