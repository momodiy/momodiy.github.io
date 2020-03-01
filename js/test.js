/*
* Created by Steven Lee
* Date: 2019/7/6
* Time: 16:11
* Project: momodiy.github.io
* */

/**
 * 要求 1.使用递归  2.无全局变量  3.只有一个参数 4.必须返回字符串
 * @param str
 */
// function fun(num){
//   console.log(num);
//   let num1 = num / 10;
//   let num2 = num % 10;
//   if(num1<1){
//     return num;
//   }else{
//     num1 = Math.floor(num1);
//     // console.log(`${num2}${fun(num1)}`);
//     return `${num2}${fun(num1)}`
//   }
// }
// var a = fun(12345)
// console.log(a)
// console.log(typeof a)

const convert = num =>
   (num / 10) | 0
     ? String(num % 10) + convert((num / 10) | 0 )
     : String(num)

let res = convert(12345)
console.log(res) // 54321
console.log(typeof res)// string
