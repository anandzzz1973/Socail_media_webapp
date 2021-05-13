const express = require('express');

const {db} = require('./db/model');

const app = express();


db.sync()
.then(()=>{
    app.listen(3000,()=>{
        console.log("server has been started on port 3000...");
    })
})
.catch((err)=>{
    console.log("database has not been synced");
})

