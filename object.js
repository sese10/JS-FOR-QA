/*const myObject = {name:'car', color:'red', price:25000}

const door = {
    isOpen:false,
    material:'wood',
    height: 8,
    toggleOpenAndClose:function(){
        if(door.isOpen===true){
            door.isOpen===false
        }else{
            door.isOpen = true
        }
    }
}

const person = {
    name: 'Nick',
    age: 24,
    siblings: ['Richard', 'Ken', 'Jane'],
    addSiblings: function(name){
        person.siblings.push(name)
    }
}
   // door.toggleOpenAndClose()
    person.addSiblings('Henry')
    person.hairColor = ('black')
    console.log(person)*/

    //console.log(door.isOpen, door['material'])'

    const person = {
        name: 'Nick',
        age: 24,
        siblings: [
            {
                name: 'Richard',
                age: 20,
            },
            {
                name: 'Rose',
                age: 17,
            },
            {
                name: 'Ben',
                age: 27,
            }

     ],
     addSiblings: function(name){
        person.siblings.push(name)
     }

    }
          
    person.addSiblings({
        name: 'Henry',
        age: 0,
    })
    person.hairColor = 'black'
    console.log(person)