import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
const mongoUri = "mongodb+srv://EKaxada:yogera@cluster0.rl9xu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.Promise = global.Promise
mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false })
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})