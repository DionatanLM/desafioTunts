const express = require('express')
const axios = require('axios')


const app = express()

app.listen('3000')

app.route('/').get( (req, res) => { 

    axios.get('https://restcountries.com/v3.1/all')
    .then(result => res.send(result.data))
    .catch(err => res.send(err))
})