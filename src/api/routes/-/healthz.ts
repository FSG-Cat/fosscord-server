import { route } from "@fosscord/api";
import { Request, Response, Router } from "express";
import { getConnection } from "typeorm";

const router = Router();

router.get("/", route({}), (req: Request, res: Response) => {
	try {
		// test that the database is alive & responding
		getConnection();
		return res.sendStatus(200);
	} catch (e) {
		res.sendStatus(503);
	}
});

export default router;
