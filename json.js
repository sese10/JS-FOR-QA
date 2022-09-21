const myObject = {
    name: 'vehicle',
    type: 'car',
    color: 'black',
}

const json = JSON.stringify(myObject)
console.log(json)

console.log(JSON.parse(json))