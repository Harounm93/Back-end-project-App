const express = require("express");
 const router  = express.Router();


 const { getHobbiesAll,
    getHobbiesUser,
    deleteHobbiesById,
    postNewHobby
} = require("../models/notes")

// GET ALL HOBBIES

router.get("/", async function (req,res) {

    const getHobby = await getHobbiesAll();
    console.log(" Success! here are all the hobby notes")
    res.json({ payload: getHobby })
})

//Return hobbies for specified user
router.get("/:id", async function (req,res) {

    const getUser = await getHobbiesUser(req.params.id)
    console.log(`Success! here are the hobbies for ${req.params.id}`)
    res.json({ payload: getUser })
})


//DELETE HOBBY BY USER ID

router.delete("/:id", async function (req,res) {

    const result = await deleteHobbiesById(req.params.id)
    console.log(`Deleted hobbies ${req.params.id}`)
    res.json(result)
})

// Post HOBBY BY USER ID

router.post("/", async function (req,res) {
     const result = await postNewHobby(req.body)
    console.log(`SUccess! posted hobby `)
    res.json(result)
})

module.export = router

