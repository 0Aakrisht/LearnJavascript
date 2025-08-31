//refractor es5 code to es6 (enhanced object literals)
//ES5
//var a = 1 ; 
// b = 2 ;
// c = 3 ;
// obj = {
// a : a,
// b : b , 
//c : c ,
// };
 function value(a , b , c) {
    return {
        a ,
        b ,
        c
    }
    again : () =>{
        console.log(`the value of a is ${a} , b is ${b} and c is ${c}`);   
    }
    
 } ;
  
 const num = value(1 , 2 , 3);
 console.log(num);
 console.log(num.again());
 
 //second question 
 // function getPersonES6(name , age , height) {
 //return {
 // name : name ,
 // age : age ,
 // height : height,
 // };
 // }
 //getpersonES6("John" , 30 , 5.9);
 //expected output : {name : "John" , age : 30 , height : 5.9}

 function getPersonES6(name , age , height){
    return {
        name , 
        age , 
        height ,
        data : () => {
            console.log(`the name is ${name} , age is ${age} and height is ${height}`);
            
        }
    }
 } ;
 const dot = getPersonES6("John" , 30 , 5.9);
 console.log(dot);
 console.log(dot.data());
 