// 1.Create a symbol provide a value of "foo"
// 2.Check the type of that symbol.
// 3.Create empty object.
// 4.Store symbol as the property to that object.

let sym = Symbol("foo");
console.log(typeof(sym));

let obj = {
    firstname : "Aakrisht",
    lastname : "Pachhai"
};
obj[Symbol("foo")] = "some value for foo" ;
console.log(obj);

for(let i in obj)
{
    console.log(i);
    
}

