//1. make a clone of "arr1 , arr2" by using spread operator
let arr1 = [1,2,3];
let arr2 =[4,5,6];
//array ko clone garna [] use garincha
let clone1 = [...arr1, ...arr2];
console.log(clone1);

//2. make a clone of "user" object using spread operator
let user = {
    name : "Aakrisht Pachhai",
    age : 20 ,
    work : "student"
}
//object ko clone garna {} use garincha
let clone2 = {...user};
console.log(clone2);
