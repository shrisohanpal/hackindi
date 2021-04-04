import mongoose from 'mongoose'

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        orderItems: [
            {
                name: { type: String, required: true },
                image: { type: String, required: true },
                price: { type: Number, required: true },
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: 'Course',
                },
            },
        ],
        totalPrice: {
            type: Number,
            required: true,
            default: 0.0,
        }
    },
    {
        timestamps: true,
    }
)

const Order = mongoose.model('Order', orderSchema)

export default Order