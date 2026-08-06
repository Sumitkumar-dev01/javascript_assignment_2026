function formatLargeNumber(number) {
    if (number >= 1_000_000) {
        // Convert to millions (M) and format to one decimal place
        return (number / 1_000_000).toFixed(1) + "M";
    } else if (number >= 1_000) {
        // Convert to thousands (K) and format to one decimal place
        return (number / 1_000).toFixed(1) + "K";
    } else {
        // If the number is less than 1000, just return it as a string
        return number.toString();
    }
}


// example usage

console.log(formatLargeNumber(1500));  // output: "1.5k"
console.log(formatLargeNumber(3500000)); // output: "3.5M"
console.log(formatLargeNumber(950)); // output: "950"



// tofixed -> for one decimal. 



function formatLargeNumber1(number){
    if(number>1000000){
        return (number/1000000).toFixed(1) + "M"
    }
    else if(number>1000){
        return (number/1000).toFixed(1) + "k"

    }
    else{
        return number.toString(); 
    }
}


console.log(formatLargeNumber1(1500));  // output: "1.5k"
console.log(formatLargeNumber1(3500000)); // output: "3.5M"
console.log(formatLargeNumber1(950)); // output: "950"
