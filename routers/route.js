import { Router } from "express";
import * as controller from '../controllers/controller.js';
const router =Router();


/*** routes ***/

/** Questions Routes api */
router.route('/questions').get(controller.getQuestions) /** get request */
                          .post(controller.insertQuestions)/** post request */
                          .delete(controller.dropQuestions)/** delete request */


 router.route('/result')   
          .get(controller.getResult)
          .post(controller.postResult)
          .delete(controller.dropResult)
                     
 export default router;
