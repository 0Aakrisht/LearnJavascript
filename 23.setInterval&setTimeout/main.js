const mouse = setInterval(() => {
    console.log("Hello ,My name is Aarkisht");
    
    
}, 2000);
setTimeout(() => {
    clearInterval(mouse)  
    console.log("I am going to stop the interval now");
      
}, 10000);