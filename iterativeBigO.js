function arrDouble(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2;
    }
    return arr;
}

//O(n)
    //it has to go through the whole array


function countSheep(num){
    for(let i = num; i > 0; i--){
        console.log(`${i} - Another sheep jump over the fence`);
    }
}

//O(n)
    //it has to go through the whole loop to console.log()

function nthTriangularNumber(num){
    let result = 0;
    for(let i = 1; i <= num; i++){
        result += i;
    }
    return result;
}

//O(n)
    //it has to loop through everything to add all the numbers together

function reverseString(str){
    let length = str.length;
    let result = '';

    for(let i = 0; i < length; i++){
        result = str[0] + result;
        str = str.slice(1);
    }
    
    return result;
}

//O(n)
    //we go throught the whole arr to reverse the string making it linear 