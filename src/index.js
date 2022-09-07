const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const app = express();
const mongoose = require ('mongoose')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://iamaditya:gbCsJkKLQc8U2oyp@cluster0.brptf5o.mongodb.net/group63Database?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);

//version controller new Date()

app.use(function (req, res) {
    var err = new Error('Not Found');
    err.status = 404;
    return res.send({status : 404, msg : "path not found"})
    });
    

app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});