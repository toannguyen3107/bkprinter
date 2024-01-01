import mongoose, {Schema} from 'mongoose'

export default mongoose.model('logs', new Schema ({
    key: {
        type: Number,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        validate: {
            validator: (value) => value.length > 5 && value.length < 50,
            message: 'username must be at least 5 characters and at most 50 characters'
        }
    },
    location: {
        type: String,
        enum: {
            values: ['H1', 'H2', 'H3', 'H6'],
            message: '{VALUE} is not support',
        },
        required: true,
    },
    bookName: {
        type: String,
        required: true,
    },
    printerId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
}))
