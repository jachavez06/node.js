const express = require('express')
const app = express()

app.use(express.static('public'));

// Route GET root requests
app.get('/', function (req, res) {
    res.send('Hello GET');
})

// Listener
var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})