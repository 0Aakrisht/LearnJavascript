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
 
 