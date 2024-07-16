const express = require('express');
const app = express();
__path = process.cwd()
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 8000;
let server = require('./wasiqr'),
    code = require('./pair');
require('events').EventEmitter.defaultMaxListeners = 500;
app.use('/wasiqr', server);
app.use('/code', code);
app.use('/pair',async (req, res, next) => {
res.sendFile(__path + '/pair.html')
})
app.use('/',async (req, res, next) => {
res.sendFile(__path + '/wasipage.html')
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(PORT, () => {
    console.log(`
Don't Forget To Give Star

 Server running on http://localhost:` + PORT)
})

module.exports = app
/**
    powered by wasi tech team 
    join Whatsapp channel for more updates 
    **/
