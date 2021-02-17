const {query}  = require('../index.js')
const notes = [

{name: "mahdi",
age: 26,
hobby: "football"},

{name: "john",
age: 29,
hobby: "rugby"},

{name: "amy",
age: 24,
hobby: "basketball"}
]
//sample data above

const statement = `
INSERT INTO hobbies (name,age, hobby)
VALUES ($1, $2, $3)
`

function populateTable(){
console.log("uploading notes..");
notes.forEach(async function ({ name, age, hobby })  {
   await query(statement,[name,age , hobby])
   console.log(`${name} added to the db`)
})


}

populateTable()