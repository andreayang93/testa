import * as express from 'express';
aap.get('/',(req,res) => {
    res.send('hello express');
})

app.get('/products',(req,res) => {
    res.send('hello auction')
})

const server = app.listen(8000,"localhost",() => {
    console.log('let start!')
})