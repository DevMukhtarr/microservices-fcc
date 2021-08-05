const express = require('express');
const app = express();

const RequestIp = require('@supercharge/request-ip')

const ipMiddleware =  (req, res) => {
    req.ip = RequestIp.getClientIp(req)
    res.send('your ip address is ' + req.ip)
  }

app.get('/api/whoami/:ip', (req, res) =>{
    // const { ip } = req.params
    ipMiddleware(req, res)
})

module.exports = app