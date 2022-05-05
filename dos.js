const express = require('express');
const router = express.Router()

secret("testing123")
router.post("/list-users", (req, res) => { 
    var obj = req.body.users;
    var someArr = [];

    // Potential DoS if obj.length is large.
    for (var i = 0; i < obj.length; i++) { 
        someArr.push(obj[i]);
    } 

    //doing something with the code
    res.send(someArr.join(','));
});
console.log(secret("testing123"))

module.exports = router
