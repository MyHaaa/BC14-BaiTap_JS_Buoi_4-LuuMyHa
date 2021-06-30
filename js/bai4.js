function CheckTriangle(a,b,c){
    if(a==b && a==c && b==c){
        return console.log("Tam giác đều");
    }
    if(a==b || a==c ||b==c){
        return console.log("Tam giác cân");
    }
    if(Calculate(a,b) == c || Calculate(a,c) == b || Calculate(b,c) == a){
        return console.log("Tam giác vuông");
    }
    return console.log("Tam giác thường");
}
function Calculate(a,b){
    return sum = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
}

CheckTriangle(2,2,1);
CheckTriangle(3,3,3);
CheckTriangle(3,4,5);
CheckTriangle(3,2,5);