import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	return res.send("Welcome to Open Data Stage!");
});

export default router;
