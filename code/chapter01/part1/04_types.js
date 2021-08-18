//object表示一个js对象
var a;
a = {};
a = function () { };
//{} 用来指定对象中可以包含哪些属性
//语法：{属性:属性值，属性名:属性值}
//加上一个？表示属性是可选的
var b;
b = { name: "孙悟空", age: 20 };
var c;
c = { name: '猪八戒', age: 18, gender: 2 };
//设置函数结构的声明类型：
//
var d;
//string[]表示字符串数组
var e;
e = ['a', 'b', 'c'];
//number[] 表示数值数组
var f;
var g;
g = [1, 2, 3, 4];
/*
* 元组，元组就是固定长度的数组
*       语法:[类型,类型,类型]
* */
var h;
h = ['hello', 'TypeScript'];
/*
* enum 枚举
* */
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
var i;
i = {
    name: '孙悟空',
    gender: Gender.Male
};
console.log(i.gender === Gender.Male);
