import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
const mongoUri = "mongodb+srv://EKaxada:yogera@cluster0.rl9xu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoUri, { useNewUrlParser: true })
    .then(connect => console.log('connected to mongodb..'))
    .catch(e => console.log('could not connect to mongodb', e))

app.listen(config.port, (err) => {
    if (err) {
        console.log(err)
    }
    console.info('Server started on port %s.', config.port)
})