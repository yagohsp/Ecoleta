import express from 'express';

import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';

const routes = express.Router();

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes
.get('/items', itemsController.index);

routes
.post('/points', pointsController.create)
.get('/points', pointsController.index)
.get('/allpoints', pointsController.indexAll)
.get('/points/:id', pointsController.show);


export default routes;