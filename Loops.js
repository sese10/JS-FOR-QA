//While Loop
/*let star = 1 //starting point
while(star<=10000) {
   if(star===1){
      console.log(star+' star')
   } else {
      console.log(star + ' stars')
   }
   star = star + 1
}*/

// For Loop

/*for(let star = 0; star <=100; star=star+1){
   if(star===1 || star ===0){
      console.log(star + ' star')
   }else{
      console.log(star+' stars')
   }
} */


for(let number = 1; number<=20; number++){
   if(number%2 !=0){
      console.log(number +' is an odd number')
   }
   /*if(number%2 ===0){
      console.log(number +' is an even number')
   }else{
      console.log(number + ' is an odd number')
   }*/
}
     
let inputs = [1, 'Turing', {x:2}, [3,4], {y:5}];
for (let i = 0; i<inputs.length; i++){
    if(inputs[i]==='Turing') inputs.splice(i, 1);
    else console.log(inputs[i]);
}