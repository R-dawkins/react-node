import express from 'express'
// import cors from 'cors'
import * as empController from '../controller/empController.js';
const router = express.Router();
// router.use(express.urlencoded({extended:true}));
// router.use(express.json());
// router.use(cors());

router.get('/', empController.getEmp);

export default router

