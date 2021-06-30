function OddEven(a,b,c){
    var countOdd = 0;
    var countEven =0;

    if(CheckNum(a)){
        countEven++;
    }
    else{
        countOdd++;
    }

    if(CheckNum(b)){
        countEven++;
    }
    else{
        countOdd++;
    }

    if(CheckNum(c)){
        countEven++;
    }
    else{
        countOdd++;
    }

    console.log("Tổng số chẳn là: ", countEven);
    console.log("Tổng số lẻ là: ", countOdd);
}

function CheckNum(num){
    if(num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

OddEven(15,7,20);