import asyncHandler from 'express-async-handler'
import Lecture from '../models/lectureModel.js'

// @desc    Fetch all lectures
// @route   GET /api/lectures
// @access  Public
const getLectures = asyncHandler(async (req, res) =>
{
    const lectures = await Lecture.find({})
    res.json({ lectures })
})

// @desc    Fetch single lecture
// @route   GET /api/lectures/:id
// @access  Public
const getLectureById = asyncHandler(async (req, res) =>
{
    const lecture = await Lecture.findById(req.params.id)

    if (lecture) {
        res.json(lecture)
    } else {
        res.status(404)
        throw new Error('Lecture not found')
    }
})

// @desc    Delete a lecture
// @route   DELETE /api/lectures/:id
// @access  Private/Admin
const deleteLecture = asyncHandler(async (req, res) =>
{
    const lecture = await Lecture.findById(req.params.id)

    if (lecture) {
        await lecture.remove()
        res.json({ message: 'Lecture removed' })
    } else {
        res.status(404)
        throw new Error('Lecture not found')
    }
})

// @desc    Create a lecture
// @route   POST /api/lectures
// @access  Private/Admin
const createLecture = asyncHandler(async (req, res) =>
{
    const lecture = new Lecture({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        numReviews: 0,
        description: 'Sample description',
    })

    const createdLecture = await lecture.save()
    res.status(201).json(createLecture)
})

// @desc    Update a lecture
// @route   PUT /api/lectures/:id
// @access  Private/Admin
const updateLecture = asyncHandler(async (req, res) =>
{
    const {
        name,
        price,
        description,
        image
    } = req.body

    const lecture = await Lecture.findById(req.params.id)

    if (lecture) {
        lecture.name = name
        lecture.price = price
        lecture.description = description
        lecture.image = image

        const updatedLecture = await lecture.save()
        res.json(updateLecture)
    } else {
        res.status(404)
        throw new Error('Lecture not found')
    }
})

// @desc    Create new review
// @route   POST /api/lectures/:id/reviews
// @access  Private
const createLectureReview = asyncHandler(async (req, res) =>
{
    const { rating, comment } = req.body

    const lecture = await Lecture.findById(req.params.id)

    if (lecture) {
        const alreadyReviewed = product.reviews.find(
            (r) => r.user.toString() === req.user._id.toString()
        )

        if (alreadyReviewed) {
            res.status(400)
            throw new Error('Lecture already reviewed')
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        }

        lecture.reviews.push(review)

        lecture.numReviews = lecture.reviews.length

        lecture.rating =
            lecture.reviews.reduce((acc, item) => item.rating + acc, 0) /
            lecture.reviews.length

        await lecture.save()
        res.status(201).json({ message: 'Review added' })
    } else {
        res.status(404)
        throw new Error('Lecture not found')
    }
})

export
{
    getLectures,
    getLectureById,
    deleteLecture,
    createLecture,
    updateLecture,
    createLectureReview
}