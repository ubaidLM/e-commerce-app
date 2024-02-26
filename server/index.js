import express from 'express'
import cors from 'cors'

const app=express()

const PORT=8000|process.env.PORT

app.use(cors())


app.listen(PORT,()=>{
    console.log("http://localhost:8000")
})
