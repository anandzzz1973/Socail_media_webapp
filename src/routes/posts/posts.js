const route = require('express').Router();

route.get('/',(req,res)=>{
    res.send(" get all the posts ");
})

module.exports = {
    postsRoute : route
}