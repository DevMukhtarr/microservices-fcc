const express = require('express');
const app = express();
const timestamp = require('./timestamp');
const whoami = require('./whoami');
require('dotenv').config()
const PORT = process.env.PORT;

//the main file for the dateApi
app.use(timestamp);
app.use(whoami);

app.get('/', (req, res) =>{
    res.json('will probably not design, a list of five microservices, details on how to use is coming soon:)')
})
app.listen(PORT, () =>{
    console.log(`Server is listening at port ${PORT}`)
});