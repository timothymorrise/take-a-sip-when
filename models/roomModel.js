// roomModel.js
// ==============================

// imports/instantiate Schema
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Schema
const clientIDSchema = new Schema({
    id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const roomSchema = new Schema({
    clients: [
        clientIDSchema
    ]
})

// exports
