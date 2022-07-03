import express from 'express'

import diariesRoutes from './routes/diaries'
const app = express()

app.use(express.json())

const PORT = 3000

app.use('/api/diaries', diariesRoutes)

app.get('/ping', (_req,res)=>{
    console.log('estas sobre la ruta ping')
    res.send('poong')
})

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
})