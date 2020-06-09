import express from 'express';
import { celebrate, Joi } from 'celebrate';

import multer from 'multer';
import multerConfig from './config/multer';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = express.Router();
const upload = multer(multerConfig);

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes
.get('/items', itemsController.index);

routes
.post('/points', upload.single('image'), celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        whatsapp: Joi.number().required(),
        latitude: Joi.number().required(),
        longitude: Joi.number().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().max(2),
        items: Joi.string().required
    },
    {
        abortEarly: false
    })
}), pointsController.create)
.get('/points', pointsController.index)
.get('/points/:id', pointsController.show)
.get('/allpoints', pointsController.indexAll);


export default routes;