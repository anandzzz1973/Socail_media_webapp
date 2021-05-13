const express = require('express');

const {db} = require('./db/model');

const app = express();

const {usersRoute} = require('./routes/users');
const {postsRoute} = require('./routes/posts/posts');
const { urlencoded } = require('express');

app.use(express.json());
app.use(urlencoded({extended: true}));

app.use('/api/users',usersRoute);
app.use('/api/posts',postsRoute);
app.use('/',express.static(__dirname+'/public'));

db.sync()
.then(()=>{
    app.listen(3000,()=>{
        console.log("server has been started on port 3000...");
    })
})
.catch((err)=>{
    console.log("database has not been synced");
})
