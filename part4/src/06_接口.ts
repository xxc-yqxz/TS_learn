(
    function () {
        // 描述一个对象的类型
        type myType = {
            name: string,
            age: number
        };

        /* 
            接口就是用来定义一个类结构。用来定义一个类中应该包含哪些属性和方法
                同时接口也可以当成类型声明去使用
        */
        interface myInterface {
            name: string;
            age: number;
        };

        // 接口可以同名调用，且是叠加的
        interface myInterface {
            gender: string;
        }

        /* const obj: myType = {
            name: 'sss',
            age: 111
        } */
        /* const obj: myInterface = {
            name: 'sss',
            age: 111,
            gender: '男'
        } */

        /* 
            接口可以在定义类的时候去限制类的结构
                接口中的所有的书写都不能有实际的值
                接口只定义对象的结构，而不考虑实际值
                    在接口中所有的方法都是抽象方法
        */
        interface myInter {
            name: string;
            sayHello(): void;
        }

        /* 
            定义类时，可以使用类去实现一个接口，
                实现接口就是使类满足接口的要求
        */
        class MyClass implements myInter {
            name: string;
            constructor(name: string) {
                this.name = name
            }
            sayHello() {
                console.log('你好');
            }
        }
    }

)();