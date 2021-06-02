import express from 'express'
const router = express.Router()
import
{
    getLectures,
    getLectureById,
    deleteLecture,
    createLecture,
    updateLecture,
    createLectureReview,
} from '../controllers/lectureController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getLectures).post(protect, admin, createLecture)
router.route('/:id/reviews').post(protect, createLectureReview)
router
    .route('/:id')
    .get(getLectureById)
    .delete(protect, admin, deleteLecture)
    .put(protect, admin, updateLecture)

export default router