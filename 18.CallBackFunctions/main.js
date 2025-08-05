//1. Create a function name (showCallFunc)
//2. pass "fn" as a parameter.
//3. inside that function , create variable which holds value of 10
//4. pass that value to the callback function.
//5. Now create callback function and print that value which you pass as parameter to the callback func
function showCallFunc(fn){
    a =10;
    fn(a);
}
showCallFunc(function(a)
{
    console.log(a);
    
})