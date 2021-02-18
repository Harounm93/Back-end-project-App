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


module.exports = {
getHobbiesAll,
getHobbiesUser,
deleteHobbiesById

}