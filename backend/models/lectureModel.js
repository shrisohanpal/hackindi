import mongoose from 'mongoose'

const lectureSchema = mongoose.Schema(
    {
        no: {
            type: Number,
            default: 0
        },
        title: {
            type: String
        },
        videoLink: {
            type: String,
        },
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    },
    {
        timestamps: true
    }
)

const Lecture = mongoose.model('Lecture', lectureSchema)

export default Lecture