import express from 'express';
import {createFacility} from './services/facility'
const router = express.Router();

router.post('/create/facility', async (req, res) => {
    console.log("API called ::: /create/facility")
    const facility = await createFacility(req.body);
    return res.json(facility);
})

export default router;