import * as express from 'express';
import  {Server} from 'ws';
const app = express();
app.get('/',(req,res) => {
    res.send('hello express');
})

app.get('/api/products',(req,res) => {
    res.json(products)
})

//req.params.id 请求的链接参数的id
app.get('/api/products/:id',(req,res) => {
    res.json(products.find((product)=>product.id == req.params.id))
})

const server = app.listen(8000,"localhost",() => {
    console.log('let start!')
})

server.listen(8000);

const wsServer = new Server({port:8085});
wsServer.on('connection',websocket => {
    websocket.send("服务器主动推送");
    websocket.on("message", message =>{
        console.log("接受客户端发的消息："+message);
    })
});
setInterval(()=>{
    if(wsServer.clients){
        wsServer.clients.forEach(client => {
            client.send('这是定时推送')
        })
    }
},2000)
export class Product {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public rating: number,
        public desc: string,
        public categories: Array<string>) { }
}
const products: Product[] = [
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