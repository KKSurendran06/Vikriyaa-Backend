const mongoose = require('mongoose')

const User = new mongoose.Schema(
    {
    username: { type: String, required: true },
    email: { type:String, required: true },
    password: { tyoe:Strin, required: true},

    },
    { collection: 'user-data' }

)

const model = mongoose.model('UserData', User)

module.exports = model