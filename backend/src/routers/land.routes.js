import { Router } from 'express';
const router = Router();
import { searchLandRecord } from '../controllers/land.controllers.js';

router.get('/search', searchLandRecord);

export default router;
