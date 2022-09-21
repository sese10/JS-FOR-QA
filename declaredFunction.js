/*function MyFunction(){
    //function declaration
    console.log('My first function');
}

MyFunction(); // function call*/

/*function greeting (name){
    console.log('Good morning, ' + name);
}
greeting('Rita');*/

/*function addNumbers(firstNumber, secondNumber){
    const sum = firstNumber + secondNumber;
    console.log(sum)
}
addNumbers(20, 20);*/

/*function addNumbers(firstNumber, secondNumber){
    const sum = firstNumber + secondNumber;
    return sum;
}

const moreOp = addNumbers(2.5, 2.5) + 20;

console.log(moreOp);*/

/*function converter(dollar){
    //convert to dollar and return the equivalent dollar value
    // conversion rate: 410 naira to 1 dollar
    const naira = dollar * 500
    return naira;
}
    const nairaValue = converter(100);
    console.log(nairaValue);*/

    const myName = 'Ben'

    function greet(){
        console.log('Good morning, '+myName);
        function innerGreet(){
            console.log('Good eveing, '+myName);
        }

       innerGreet(); 
    }

    greet();