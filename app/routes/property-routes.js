import express from 'express';

import * as propertyController from '../controllers/property-controller.js';


const router = express.Router();
// Based the http method used in the request it routes to the controller - services
router.route('/')
  .get(propertyController.find)
  .post(propertyController.post);

router.route('/:id')
   .get(propertyController.get)
   .put(propertyController.put)
   .delete(propertyController.remove);

  export default router;