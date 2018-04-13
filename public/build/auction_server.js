"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
aap.get('/', function (req, res) {
    res.send('hello express');
});
app.get('/products', function (req, res) {
    res.send('hello auction');
});
var server = app.listen(8000, "localhost", function () {
    console.log('let start!');
});
