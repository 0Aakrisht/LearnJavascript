let options = {
    title :"my menu",
    items: ["item1", "item2"]
};

function showmenu({
    title = "untitled",
    width: w = 100,
    height: h = 200,
    items : [item1, item2]  , 
}) {
    console.log( `${title} ${w} ${h}` );
    console.log(item1);
    console.log(item2);
}
showmenu(options);