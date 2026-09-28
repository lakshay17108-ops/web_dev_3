import express from 'express'
const app = express()

const port = 3000 
import userRoutes from './routes/userRoutes.js'
app.use(userRoutes);

app.listen(port, ()=>{
    console.log('server has stared at port', port)
})
