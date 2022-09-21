//if Statement
//ifelse statement
//ifelse if
//switchStatement

/*const age = 65
if(age<=10)
{
console.log('You are eligible to vote')
}
else if(age>60 && age===50)
{
    console.log('You are too old to vote')
}else
{
    console.log('You are too young to vote')
}*/

const day = 'Wednesday'
/*if(day==='Monday'){
    console.log('Go to work!')
}else if (day==='Wednesday'){
    console.log('Rest!')
}else if (day==='Friday'){
    console.log('TGIF!')
}else{
    console.log('Party time!')
}*/

switch(day){
    case 'Monday':
        console.log('Go to work!')
        //break
    case 'Wednesday':
        console.log ('Rest!')
        //break
    case 'Friday':
        console.log ('TGIF!')
        //break
    default:
        console.log ('Party time!')            
}

