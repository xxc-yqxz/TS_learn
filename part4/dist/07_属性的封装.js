"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            // TS可以在属性前添加属性的修饰符
            /*
                public修饰的属性可以在任意位置访问（修改）默认值（默认）
                private 私有属性，私有属性只能在类内部访问（修改）
                    - 通过在类中添加方法使得私有属性可以被外部访问

                protected 受保护的属性，只能在当前类和当前类的子类中使用
            */
            this.name = name;
            this.age = age;
        }
        /*
            getter方法用来读取属性
            setter方法用来设置属性
                -它们被称为属性的存取器

        */
        /*  // 定义方法，用来获取name属性
         getName() {
             return this.name
         }
 
         // 定义方法，用来设置name属性
         setName(val: string) {
             this.name = val;
         }
 
         getAge() {
             return this.age;
         }
 
         setAge(age: number) {
             // 判断年龄是否合法
             if (age >= 0) {
                 this.age = age
             }
         } */
        // TS中设置getter方法的方式
        get perName() {
            return this.name;
        }
        set perName(value) {
            this.name = value;
        }
        get perAge() {
            return this.age;
        }
        set perAge(value) {
            if (value >= 0) {
                this.age = value;
            }
        }
    }
    const per = new Person('孙悟空', 18);
    /*
        现在属性是在对象中设置的，属性可以任意的被修改
        属性可以任意被修改将会导致对象中的数据变得非常不安全
    */
    console.log(per);
    // per.name = '猪八戒'  // 报错
    // per.age = 38   // 报错
    /* per.setName('猪八戒')
    per.setAge(33);
    console.log(per) */
    per.perName = '猪八戒';
    per.perAge = 33;
    console.log(per.perName);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(123);
    // B.num = 33;
    /*  class C {
         name: string;
         age: number
 
         constructor(name: string, age: number) {
             this.name = name;
             this.age = age;
         }
     } */
    // 等价于：
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 111);
    console.log(c);
})();
