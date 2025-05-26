import { Router } from 'express';
const router = Router();
import { searchLandRecord } from '../controllers/landController';

router.get('/search', searchLandRecord);

export default router;
