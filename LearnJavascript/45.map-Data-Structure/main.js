//1. Create a new Map.
//2. Set these properties ("a","b","c")
//3. Set these values (1,2,3)
//4. Get "a" from that map
//5. Check the size of that map
//6. Delete the property "b" & then check the size.

const newMap = new Map()

newMap.set("a",1);
newMap.set("b",2);
newMap.set("c",3);

console.log(newMap.get("a"));
console.log(newMap.size);

newMap.delete("b");
console.log(newMap.size);


