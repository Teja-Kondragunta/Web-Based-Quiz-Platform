import { Router } from "express";
import * as controller from '../controllers/controller.js';
import * as userController from '../controllers/userController.js'
const router =Router();


/*** routes ***/

/** login route api */
 router.post('/login',controller.login);

/**   Getting all users */
 router.route('/user').get(userController.getUser);
                      




router.route('/user/:name').delete(userController.deleteUser)/** deleting user by name api */
                           .put(userController.updateUser)/**updating user */

/** register Route api */
router.route('/register').post(userController.StoreUser);

/** Questions Routes api */
router.route('/questions').get(controller.getAllQuestions) /** get request */
                          .post(controller.insertQuestions)/** post request */
                          .delete(controller.dropQuestions)/** delete request */


/** getting questions by topic name */
router.route('/questions/:subject').get(controller.getQuestions)

 router.route('/result')   
          .get(controller.getResult)
          .post(controller.postResult)
          .delete(controller.dropResult)
                     
 export default router;
