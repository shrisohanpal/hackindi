import asyncHandler from 'express-async-handler'
import Course from '../models/courseModel.js'

// @desc    Fetch all courses
// @route   GET /api/courses
// @access  Public
const getCourses = asyncHandler(async (req, res) =>
{
    const courses = await Course.find({})
    res.json({ courses })
})

// @desc    Fetch single course
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = asyncHandler(async (req, res) =>
{
    const course = await Course.findById(req.params.id)

    if (course) {
        res.json(course)
    } else {
        res.status(404)
        throw new Error('Course not found')
    }
})

// @desc    Delete a course
// @route   DELETE /api/courses/:id
// @access  Private/Admin
const deleteCourse = asyncHandler(async (req, res) =>
{
    const course = await Course.findById(req.params.id)

    if (course) {
        await course.remove()
        res.json({ message: 'Course removed' })
    } else {
        res.status(404)
        throw new Error('Course not found')
    }
})

// @desc    Create a course
// @route   POST /api/courses
// @access  Private/Admin
const createCourse = asyncHandler(async (req, res) =>
{
    const course = new Course({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        numReviews: 0,
        description: 'Sample description',
    })

    const createdCourse = await course.save()
    res.status(201).json(createCourse)
})

// @desc    Update a course
// @route   PUT /api/courses/:id
// @access  Private/Admin
const updateCourse = asyncHandler(async (req, res) =>
{
    const {
        name,
        price,
        description,
        image
    } = req.body

    const course = await Course.findById(req.params.id)

    if (course) {
        course.name = name
        course.price = price
        course.description = description
        course.image = image

        const updatedCourse = await course.save()
        res.json(updateCourse)
    } else {
        res.status(404)
        throw new Error('Course not found')
    }
})

// @desc    Create new review
// @route   POST /api/courses/:id/reviews
// @access  Private
const createCourseReview = asyncHandler(async (req, res) =>
{
    const { rating, comment } = req.body

    const course = await Course.findById(req.params.id)

    if (course) {
        const alreadyReviewed = product.reviews.find(
            (r) => r.user.toString() === req.user._id.toString()
        )

        if (alreadyReviewed) {
            res.status(400)
            throw new Error('Course already reviewed')
        }

        const review = {
            name: req.user.name,
            rating: Number(rating),
            comment,
            user: req.user._id,
        }

        course.reviews.push(review)

        course.numReviews = course.reviews.length

        course.rating =
            course.reviews.reduce((acc, item) => item.rating + acc, 0) /
            course.reviews.length

        await course.save()
        res.status(201).json({ message: 'Review added' })
    } else {
        res.status(404)
        throw new Error('Course not found')
    }
})

export
{
    getCourses,
    getCourseById,
    deleteCourse,
    createCourse,
    updateCourse,
    createCourseReview
}