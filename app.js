const express = require('express');
const path = require('path');
const app = express();



app.use(function(req,res,next){
   res.sendFile(path.join(__dirname,'./views','index.html'));
});

app.listen(8080, function() {
    console.log("server started on port 8080");
})
