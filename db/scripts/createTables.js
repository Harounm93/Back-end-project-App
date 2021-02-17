const { query }  = require("../index.js")

const statement = `
CREATE TABLE hobbies
(
    id SERIAL PRIMARY KEY,
    user_id INTEGER,
    name VARCHAR(50),
    age INTEGER,
    hobby TEXT
        
)`;


async function createTable(){

    let res = await query(statement)
    console.log(res)
}

createTable()