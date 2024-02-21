// Import Express and booking reservation controller
import express from "express";
import * as brcontroller from '../controllers/bookingreservationcontroller.js';
const router = express.Router();

router.route('/')
     .get(brcontroller.find)
     .post(brcontroller.post);
router.route('/:id')
     .get(brcontroller.get)
     .put(brcontroller.put)
     .delete(brcontroller.remove);

export default router;
