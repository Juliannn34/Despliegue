import express from "express";

const PUERTO = process.env.PUERTO || 3000

const app = express()

app.get('/test', (req,res)=>{
    res.send('Test funcionando')
})

app.link(PUERTO)