require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models')
const cors = require('cors')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')

const PORT = process.env.PORT || 6000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', router)

//errors proccessing
app.use(errorHandler)  


const start = async () => {
    try{
        await sequelize.authenticate()                             //connection with DB
        await sequelize.sync()                                      
        app.listen(PORT, () => console.log(`server works ${PORT}`))
    }catch (e){
        console.log(e)
    }
}

start()