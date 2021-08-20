"use strict";
/* function fn(a: number): number {
    return a;
} */
/*
    在定义函数或者类时，如果遇到类型不明确就可以使用泛型。

*/
function fn(a) {
    return a;
}
// 可以直接调用具有泛型的函数
let result = fn(10); // 不指定泛型，TS可以自动对类型进行推断
let result2 = fn('hello'); //指定泛型
// 泛型可以同时指定多个
function fn2(a, b) {
    console.log(b);
    return a;
}
fn2(123, 'hello');
// 注意此处接口要用extends
// <T extends Inter> 表示T中必须要有length属性.泛型T必须是Inter实现类（子类）
function fn3(a) {
    return a.length;
}
fn3('123');
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass('孙悟空');
