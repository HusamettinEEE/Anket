const mongoose  = require('mongoose')
const Schema = mongoose.Schema

const  pollSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    ng: {
        type: String,
        required: true
    },
    nd: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})

const poll =mongoose.model('poll', pollSchema)

module.exports = poll