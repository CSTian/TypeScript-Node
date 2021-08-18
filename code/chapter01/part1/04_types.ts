//object表示一个js对象
let a: object;
a = {};
a = function () {
};

//{} 用来指定对象中可以包含哪些属性
//语法：{属性:属性值，属性名:属性值}
//加上一个？表示属性是可选的
let b: { name: string, age?: number };

b = {name: "孙悟空", age: 20};

let c: { name: string, [propName: string]: any }
c = {name: '猪八戒', age: 18, gender: 2}

//设置函数结构的声明类型：
//
let d: (a: number, b: number) => number;
//string[]表示字符串数组
let e: string[]
e = ['a', 'b', 'c'];

//number[] 表示数值数组
let f: number[];

let g: Array<number>;
g = [1, 2, 3, 4];

/*
* 元组，元组就是固定长度的数组
*       语法:[类型,类型,类型]
* */
let h: [string, string];
h = ['hello', 'TypeScript'];

/*
* enum 枚举
* */
enum Gender {
    Male,
    Female
}

let i: { name: string, gender: Gender }
i = {
    name: '孙悟空',
    gender: Gender.Male
}
console.log(i.gender === Gender.Male);

let j: { name: string } & { age: number };
j = {name: '孙悟空', age: 12};

//类型的别名
type myType= 1 | 2 | 3 | 4 | 5;
let m:myType;
