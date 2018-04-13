"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
app.get('/', function (req, res) {
    res.send('hello express');
});
app.get('/api/products', function (req, res) {
    res.json(products);
});
//req.params.id 请求的链接参数的id
app.get('/api/products/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log('let start!');
});
server.listen(8000);
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on('connection', function (websocket) {
    websocket.send("服务器主动推送");
    websocket.on("message", function (message) {
        console.log("接受客户端发的消息：" + message);
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send('这是定时推送');
        });
    }
}, 2000);
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, '第一个商品', 899, 3.5, '这是一个电脑', ['电子产品', '家电']),
    new Product(2, '第二个商品', 799, 2.5, '这是一个衣服', ['电子产品', '家电']),
    new Product(3, '第三个商品', 859, 4.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(4, '第四个商品', 699, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(5, '第五个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(6, '第六个商品', 899, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(7, '第七个商品', 699, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(8, '第八个商品', 599, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
    new Product(9, '第九个商品', 199, 3.5, '这是一个垃圾电脑', ['电子产品', '家电']),
];
