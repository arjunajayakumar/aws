let http = require('http')

http.createServer((req, res) => {
    res.write("Hello world");
    res.end()

}).listen(8080);

const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Node app1</h1>');
});

app.listen(5000, () => {
    console.log('App listening on port 5000!');
})