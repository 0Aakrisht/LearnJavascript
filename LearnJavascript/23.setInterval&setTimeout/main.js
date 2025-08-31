const table  = setInterval(() => {
    console.log("hello world");
    
}, 2000);

setTimeout(() => {
    clearInterval(table);
    console.log("finished");
    
}, 10000);