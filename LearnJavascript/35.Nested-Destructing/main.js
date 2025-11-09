// const songs = [
//     {name :"Lucky  You", singer:"Eminem" , duration: 3.40},
//     {name :"Love The Way You Lie", singer:"Eminem", duration: 4.20},
//     {name :"Numb", singer:"Linkin Park", duration: 3.05},
//     {name :"In The End", singer:"Linkin Park", duration: 3.36}
// ];

// const [,,,{singer :s}] = songs;
// console.log(s);


//nested ko bau destructuring 
const data = {
    user: {
        id: 123,
        name: "Aakrisht Pachhai",
        age: 20,
        email: "paakrisht123@gmail.com",
        address: {
            city: "Parasi",
            country: "Nepal",
        },
        hobbies: ["coding", "reading", "gaming"],
        scores: { math: 95, science: 90, history: 85 },
    },
    products: [
        { id: 1, name: "Laptop", price: 80000 },
        { id: 2, name: "Smartphone", price: 50000 },
        { id: 3, name: "Tablet", price: 30000 },
    ],
    settings: {
        darkmode: true,
        emailNotification: true,
        smsNotification: false,
        pushNotification: true,
        language: "English",
    },
};

// Destructuring
const { user, products, settings } = data;
const { name, age, hobbies, scores, address, email } = user;
const { city, country } = address;
const { math, science, history } = scores;
const [product1, product2, product3] = products;
const { darkmode, emailNotification, smsNotification, pushNotification, language } = settings;

// Logging
console.log(`Name : ${name}`);
console.log(`Age : ${age}`);
console.log(`Address : ${city}, ${country}`);
console.log(`Hobbies : ${hobbies.join(",")}`);
console.log(`Math score : ${math}`);
console.log(`Science score : ${science}`);
console.log(`History score : ${history}`);
console.log(`Product 1 : ${product1.name} - ${product1.price}`);
console.log(`Product 2 : ${product2.name} - ${product2.price}`);
console.log(`Product 3 : ${product3.name} - ${product3.price}`);
console.log(`Dark mode : ${darkmode}`);
console.log(`Email notification : ${emailNotification}`);
console.log(`SMS notification : ${smsNotification}`);
console.log(`Push Notification : ${pushNotification}`);
console.log(`Language : ${language}`);
