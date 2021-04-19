//for api key
const dotenv = require('dotenv');
dotenv.config();

///testing api key
let key = process.env.API_KEY
console.log(`Your API key is ${process.env.API_KEY}`);


//////////////////----------------/////////////////////

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const mockAPIResponse = require('./mockAPI.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(express.static('dist'));

console.log(__dirname)

app.get('/', function (req, res) {

    res.sendFile(path.resolve('dist/index.html'))
})


app.post('/articalurl', async (req, res) => {

    let url = req.body.userUrl
    console.log('server ' + url);
    const StandardURL = 'https://api.meaningcloud.com/sentiment-2.1'
    //const key = process.env.API_KEY;
    
    let articalUrl = `${StandardURL}?key=${key}&url=${url}&lang=en`
    

    fetch(articalUrl).then((response) => {
        return response.json();
    })
        .then((data) => {
            
            
        return res.send(data);
        })
        .catch(error => {
            console.log(error);
        })

})

// designates what port the app will listen to for incoming requests
app.listen(8084, function () {
    console.log('Example app listening on port 8084!');
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

