const old = new Set()

old.add("Aakrisht");
old.add("Pachhai");

for(let items of old)
{
    console.log(old);
    
}

console.log(old.has("Pachhai"))
console.log(old);

//1. Create a Set name (letters)
//2. Add ("a","b","c") as values
//3. Iterate over Set & log the values.

const letters= new Set()

letters.add("a");
letters.add("b");
letters.add("c");

for(let value of letters)
{
    console.log(value);
    
}
console.log(letters);


