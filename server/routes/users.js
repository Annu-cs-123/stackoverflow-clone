import express from "express";

import { getAllUsers } from "../controllers/Users.js";
import { login, signup } from "../controllers/auth.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);

export default router;
