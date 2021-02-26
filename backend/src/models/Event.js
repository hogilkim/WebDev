const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: String,
    description: String,
    date: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
},
    {
        // toJSON: {
        //     virtuals: true
        // }
    }
)

module.exports = mongoose.model('Event', EventSchema);

