'use strict';

// 1) ---------------------
//
//  using the (findMax) function; return the maximum value in the provided array
//  without using build-in functions.
//  EX:
//  [12, 32, 22, 45, 78, 12, 50] ==> 78
//
// ------------------------

const findArrayLength = arr => {
    let i;
    for (i=0 ; arr[i] ; i++) ;
    return i ;
}

const findMax = (arr)=>{
    let max;
    const arrLength = findArrayLength(arr);
    max = arr[0];
    for (let i= 0 ; i < arrLength; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

// 2) ---------------------
//
//  using the (sumNums) function; return the Sum value of the numeric values
//  inside the array (there could be strings inside), without using build-in functions
//  EX:
//  [20, '234', 'car', 41, 20, 'chair'] ==> 81
//
// ------------------------

const sumNums = (arr)=>{
    let sum;
    sum = 0;
    const arrLength = findArrayLength(arr);
    for (let i= 0 ; i < arrLength; i++){
        if (typeof arr[i] === 'number'){
            sum += arr[i];
        }
    }
    return sum;
}

// 3) ---------------------
//
//  using the (reverseArray) function; return provided array reversed
//  without using build-in functions
//  EX:
//  ['C#', 'JS', 'Ruby','Python' ] ==> ['Python','Ruby','JS','C#']
//
// ------------------------
const reverseArray = (arr)=>{
    let newArray = [];
    const arrLength = findArrayLength(arr);
    for (let i = 0 ; i<arrLength ; i++){
        newArray[i] = arr[arrLength-1-i];
    }
    return newArray;
}

module.exports = {findMax , sumNums, reverseArray};