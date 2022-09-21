//const myArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//const numArray = [90, 60, 50]
//const emptyArray = []
//console.log(myArray, numArray, emptyArray.length)

//Elements of an array
//const thirdElement = myArray[0]
//myArray[4] = 25
//console.log(myArray[6])
/*console.log (emptyArray)
emptyArray[0] = 'firstElement'
emptyArray [1] = 'secondElement'
emptyArray[4] = 'fifthElement'
console.log (emptyArray)*/

//PushMethod
//const notEmpty = ['First Element', 'Second Element', 199, true, 10.10]

//emptyArray [0] = 'First Index'
//emptyArray.push('First Element', 'Second Element', 199, true, 10.10)
//notEmpty.push('Pushed Element')

//console.log(notEmpty)

//const notEmpty = ['First Element', 'Second Element', 199, true, 10.10] //pop method
/*notEmpty.pop()
notEmpty.pop()
notEmpty.pop()*/
/*for(let start = 0; start<=notEmpty.length; start=start+1){
    notEmpty.pop()
}

console.log (notEmpty)*/

//const notEmpty =['First Element', 'Second Element', 199, true] //Shift and Unshift Method
//notEmpty.unshift('Pre-Element', 'Post-Element')
//notEmpty.shift()

//console.log(notEmpty)

//const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//months.slice(2,-1) //Slice method
//console.log(months.slice(7,13))

//const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//months.splice(4,4) //Splice method
//console.log(months, months.splice(0,3))

const months = ['Jan', 'Feb', 'Mar', 'Feb', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
// indexOf and lastIndexOf
console.log (months.lastIndexOf('Feb'))