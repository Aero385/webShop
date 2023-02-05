require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 6000

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
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

//50.59 y