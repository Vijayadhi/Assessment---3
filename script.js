// 1. Print odd number in an array
//ANONYMUS
let num_array = [2,10,9,7,5,36,42,58,69,50];
let odd_array = []
let odd = (a) =>{
    if(a%2 != 0)
        odd_array.push(a) 
    return odd_array      
}
num_array.forEach(element => {
    odd(element)
    
});
console.log(odd_array.join(', '));

// IIFE
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([2,10,9,7,5,36,42,58,69,50]);

// ARRAOW FUNCTION
let printOddNumbers = (arr) => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers([2,10,9,7,5,36,42,58,69,50]);

//2. Converting all the strings to title caps in a string array
let string_array = ["i", "am", "from", "tamil", "nadu"];
let capitalized_array = [];

let convertToCapital = (strArray) => {
    for(let i = 0; i < strArray.length; i++){
        capitalized_array.push(strArray[i].toUpperCase());
    }
    return capitalized_array;
}
console.log("String array: ["+string_array+"]")
console.log("Converted string: ["+convertToCapital(string_array)+"]");

// Anonymous Function
let convertToTitleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

console.log(convertToTitleCaps(["hello", "world", "javascript"]));

// IIFE
let titleCaps = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
})(["hello", "world", "javascript"]);

console.log(titleCaps);

// Arrow function
let converttoTitleCaps = (arr) => {
    return arr.map(str => {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

console.log(converttoTitleCaps(["hello", "world", "javascript"]));



// 3. sum all the numbers in the array
// Anonymous Function
let sumOfNumbers = function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
};

console.log(sumOfNumbers([1, 2, 3, 4, 5]));

// IIFE
let sum = (function(arr) {
    return arr.reduce(function(sum, num) {
        return sum + num;
    }, 0);
})([2,10,9,7,5,36,42,58,69,50]);

console.log(sum);

// Arrow function

let sumofNumbers = (arr) => {
    return arr.reduce((sum, num) => sum + num, 0);
};

console.log(sumofNumbers([1, 2, 3, 4, 5]));




// 4. Return all the prime numbers in the array
// Anonymous Function
let getPrimeNumbers = function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};

console.log(getPrimeNumbers([2,10,9,7,5,36,42,58,69,50]));

// IIFE
let primes = (function(arr) {
    return arr.filter(function(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
})([2,10,9,7,5,36,42,58,69,50]);

console.log(primes);

// arrow function
let getprimeNumbers = (arr) => {
    return arr.filter(num => {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    });
};

console.log(getprimeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// 5.  Return all the palindromes in an array
// Anonymous Function
let getPalindromes = function(arr) {
    return arr.filter(function(str) {
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
    });
};

console.log(getPalindromes(["level", "hello", "world", "madam", "javascript", "racecar"]));

// IIFE
let palindromes = (function(arr) {
    return arr.filter(function(str) {
        return str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
    });
})(["level", "hello", "world", "madam", "javascript", "racecar"]);

console.log(palindromes);

// arrow function
let getpalindromes = (arr) => {
    return arr.filter(str => str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));
};

console.log(getpalindromes(["level", "hello", "world", "madam", "javascript", "racecar"]));


//6. Return median of two sorted arrays of the same size.

// Anonymous Function
let medianOfArrays = function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};

console.log(medianOfArrays([1, 3, 5], [2, 4, 6]));

// IIFE
let median = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = Math.floor(mergedArray.length / 2);
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
})([1, 3, 5], [2, 4, 6]);

console.log(median);


// 7. Remove duplicates from an array

// Anonymous Function
let removeDuplicates = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// IIFE
let uniqueArray = (function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
})([1, 2, 2, 3, 4, 4, 5]);

console.log(uniqueArray);










