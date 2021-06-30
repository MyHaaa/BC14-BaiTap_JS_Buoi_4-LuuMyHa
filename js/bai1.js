//Cach 1
function SortDes(a,b,c){
    var minTemp = Math.min(a,b);
    var minValue = Math.min(minTemp, c);

    var maxValue = 0;
    if(minValue == a){
        maxValue = Math.max(b,c);
    }
    else if(minValue == b){
        maxValue = Math.max(a,c);
    }
    else{
        maxValue = Math.max(a,b);
    }

    var midValue = 0;
    if(minValue == a){
        midValue = Math.min(b,c);
    }
    else if(minValue == b){
        midValue = Math.min(a,c);
    }
    else{
        midValue = Math.min(a,b);
    }

    return [minValue, midValue, maxValue];
}

//Cach 2
function SortDes2(a, b, c){
    var rangeOfNum = [a,b,c];

    for (let i = 0; i < rangeOfNum.length; i++) {
        if(rangeOfNum[i] > rangeOfNum[i+1]){
           let temp = rangeOfNum[i];
           rangeOfNum[i] = rangeOfNum[i+1];
           rangeOfNum[i+1] = temp;
        }       
    }
    return rangeOfNum;
}

console.log(SortDes(10,2,5));

console.log(SortDes2(10,2,7));
