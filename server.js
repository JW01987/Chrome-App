var express = require('express');
var app = express();
const port = 3000
const path = require('path');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// respond with "hello world" when a GET request is made to the homepage
app.get('*', function (req, res) {
    res.render('index.ejs');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})