


function makeCounter() {
    let counter =1;
    return function () {
        counter++;
    }
}

function getFactorial(n) {
    if(n == 0) {
        return 1;
    } else {
        return n * getFactorial(n - 1);
    }
};

function binarySearch(array, n) {
let i = Math.round(array.length/2);
    if(array[i]==n){
        console.log('444');
        return array[i];
    }
    if(array[i]>n){
        array.length =i;
        console.log('  <  ');
        return binarySearch(array,n);
    }
    if(array[i]<n) {
        console.log('  >  ');
        return binarySearch(array.slice(array.length - i), n);
    }
};

//b = typeof b !== 'undefined' ?  b : 1;

function getFeebonachi(index, number) {
  if(typeof index==="undefined" || number !=="undefined"){
let sum = 0;
let feebo = getClouserFeebo(1, number);


  };
  if(typeof number==="undefined" || index!=="undefined"){
return getFeeboByIndex(index);
  };
  if(index==="undefined" || number ==="undefined"){
      return false;
  }


}

const getFeeboByIndex = function (index) {
    if(index <=1){
        return index;
    }
    return getFeebonachi(index-1)+getFeebonachi(index-2);
};

function getClouserFeebo (index, number) {
    let result = 0;

    if(getFeeboByIndex(index)<= number && getFeeboByIndex(index+1)>=number){
        result = getClouserNumber(getFeeboByIndex(index), getFeeboByIndex(index+1), number);
        console.log('getClouserNumber(getFeeboByIndex(index) = '+result);

        return result;
    }
    if(getFeeboByIndex(index)<number && getFeeboByIndex(index+1)<number){

       index++;
       return getClouserFeebo(index, number);
    }
};
const getClouserNumber = function (n1, n2, number) {
    if(number-n1>=n2-number){
        return n2;
    }
    if(number-n1<=n2-number){
        return n1;
    }
};

// function getSum(sum, feebo) {
//     let prevFeebo =
//     if(feebo == 0) {
//         return 1;
//     } else {
//         return n * factorial(n - 1);
//     }
// };


