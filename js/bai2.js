function Greeting(who){
    if(who === "Bố"){
        return console.log("Chào bố");
    }
    if(who === "Mẹ"){
        return console.log("Chào mẹ");
    }
    if(who === "Anh"){
        return console.log("Chào anh");
    }
    return console.log("Chào em");
}

Greeting("Bố");