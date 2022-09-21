/*function greet (name){
    console.log('Good morning '+name);
}

greet('Rita')*/

/*const myGreet = function (name){
    console.log('Good morning, ' + name)
}

myGreet('Nick')

//callBack function

function greetings(greet){
    greet()
}
greetings(function(){
    console.log('good morning')
})*/

function greetings(greet){
    greet()
}
function callback(){
    console.log('Good morning')
}
greetings(callback)