/* let a;

a = 10;
a = 'hello'; */

// 声明一个变量a，同时指定它的类型为number
let a: number;

// a的类型设置为了number,在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = 'hello'; //此行代码会报错，因为变量a的类型是number，不能赋值字符串
let b: string;
b = 'hello';
// b = 123

// 声明完变量直接进行赋值
// let c: boolean = true;

// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
let c = false;
c = true;
// c = 12; // 报错

// JS中的函数是不考虑参数的类型和个数的
/* function sum(a, b) {
    return a + b;
}

sum(123, 456);  // 579
sum(123, "456"); // 123456 */

/*
function sum(a: number, b: number):number {
    return a + b;
    // return a + 'hello';  // 报错
}

sum(123, 456);  // 579
sum(123, "456");   // 报错
sum(123, 456, 789);   // 报错
*/

export { }