import 'dotenv/config'
import express from "express";
import pg from 'pg'

const PUERTO = process.env.PORT || 3000

//Consultas -------

const pool = new pg.Pool({
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    database: process.env.BD_NAME,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
})

//-------

const app = express()

app.get('/test', (req,res)=>{
    res.send('Test funcionando')
})

app.get('/test-bd', async (req, res)=>{

    try {
        const resultado = await pool.query('SELECT * FROM mensajes')
        res.json(resultado.rows)

    } catch (error) {
        res.sendStatus(500)
    }
    
})

app.listen(PUERTO)