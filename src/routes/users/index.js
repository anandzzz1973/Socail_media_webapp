const route = require('express').Router();

route.get('/',(req,res)=>{
    res.send(" get all the user ");
})

module.exports = {
    usersRoute : route
}
