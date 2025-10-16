import express from 'express'
import { getGifts } from '../controllers/gifts.js'

const router = express.Router()

// GET /gifts/
router.get('/', getGifts)

export default router