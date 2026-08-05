// function declaration
const fibValue = fibonacci(5); 
  //-->this will work for function declaration but not for function expression as we have to declare the function first in function expression
console.log(fibValue);
function fibonacci(num) {
    if(num < 0) return "negative number";
    return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num-2);
}

//function expression
const ans = function(num) {
    let val = 1;
    for(i = 1; i <= num; i++)val *= i;
    return val;
}

console.log(ans(5));



// Arrow function;
const age = birthYear => 2026 - birthYear;
console.log(age(2003));

const retire = birthYear => {
    const curraAge = 2026 - birthYear;
    return `Time to retire in ${60 - curraAge} yeras`;
}
console.log(retire(2003));

const timeRetire = (birthYear, name) => {
    const retireIn = retire(birthYear);
    return `${name}'s ${retireIn} from now`;
}
const stateRetire = timeRetire(2003, "Kuntal");
console.log(stateRetire);