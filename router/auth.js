import { Router } from "express";
const router = Router();
import * as authController from "../controllers/auth.js";
import registerMail from "../controllers/mailer.js";

import Auth, { localVariables } from "../middleware/auth.js";

//  Post Method
router.route("/register").post(authController.register); //register user
router.route("/registerMail").post(registerMail); //send the email
router
  .route("/authenticate")
  .post(authController.verifyUser, (req, res) => res.end()); //authenticate user
router.route("/login").post(authController.verifyUser, authController.login); //login in app

// get method
router.route("/user/:username").get(authController.getUser); //user with username
router
  .route("/generateOTP")
  .get(authController.verifyUser, localVariables, authController.generateOTP); //generate random OTP
router
  .route("/verifyOTP")
  .get(authController.verifyUser, authController.verifyOTP); //verify generated OTP
router.route("/createResetSession").get(authController.createResetSession); //reset all the variebles
router.route("/verify").get(authController.verify);

// Put Method
router.route("/updateuser").put(Auth, authController.updateUser); // is use to update the user profile
router
  .route("/resetPassword")
  .put(authController.verifyUser, authController.resetPassword); // use to reset password

export default router;
