import express from "express";

const PUERTO = process.env.PORT || 3000

const app = express()

app.get('/test', (req,res)=>{
    res.send('Test funcionando')
})

app.listen(PUERTO)