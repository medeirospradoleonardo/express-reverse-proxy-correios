const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

require('dotenv').config()


app.get(':endpoint([\\/\\w\\.-]*)', function (req, res) {
    // Remove any trailing slash from base url
    const endpoint = (process.env.API_BASE_URL).replace(/\/$/, "") + req.params.endpoint
    
    axios.get(endpoint).then(response => {
        res.json(response.data)
    }).catch(error => {
        res.json(error)
    })
})


app.listen(3000)