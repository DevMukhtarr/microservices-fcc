const express = require('express');
const app = express();
var moment = require("moment");

app.get('/api/:date_arg', (req, res) =>{
        var patt = /^[0-9]*$/g;
        const { date_arg } = req.params
        var isNum = patt.test(date_arg);
        // console.log(isNum);
        if(isNum){
            var date = moment.unix(date_arg);
            var data = {
                unix: date_arg,
                utc : date.format('MMMM DD YYYY')
            }
            res.json(data)
        } else {
            if(moment(date_arg,'MMMM DD YYYY').isValid()){
                var date = moment(date_arg,'MMMM DD YYYY');
                console.log(date_arg);
                var data = {
                    unix: date.format('X'),
                    utc: date_arg
                }
                return data;
            } else {
                return {
                    unix: null,
                    utc: null
                }
            }
        }
})

module.exports = app