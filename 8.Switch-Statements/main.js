//1.create variable name (fruit) and store "banana"
//2.if case is "banana" print "banana is good"
//3.if case is "orange" print "I am not a fan of oranges"
//4.if case is "Apple" print "how you like them apples ?"
//5. default "I have never heard of that fruit"
let fruit = "banana";

switch (fruit) {
    case "banana":
        console.log("banana is good"); 
        break;

    case "orange":
        console.log("I am not a fan of oranges");
        break;

    case "Apple":
        console.log("how you like them apples ?");
        break;
        
    default:
        console.log("I have never heard of that fruit");
        break;
}