const { query } = require("../../db/index")


// GET ALL HOBBIES FROM table

async function getHobbiesAll(){
const result  = await query(`SELECT * FROM hobbies
`);
return result.rows;
}


// GET ALL HOBBIES BY user_id

async function getHobbiesUser(){
    const result  = await query(`SELECT * FROM hobbies WHERE user_id = ${userId}
    `);
    return result.rows;
    }


    // DELETE HOBBY BY user_id

async function deleteHobbiesById(){
    const result  = await query(`DELETE FROM hobbies WHERE user_id = ${userId}
    `);
    return result.rows;
    }
///////////Post new hobby into database
const sqlStatementPost = `
INSERT INTO mentor_notes (user_id, name, age, hobby) 
VALUES ($1, $2, $3, $4) RETURNING *;
`;
async function postNewHobby({
user_id,
name,
age,
hobby
}) {
let values = [
user_id,
name,
age,
hobby
];
const result = await query(sqlStatementPost, values);
console.log(result);
}


module.exports = {
getHobbiesAll,
getHobbiesUser,
deleteHobbiesById,
postNewHobby

}