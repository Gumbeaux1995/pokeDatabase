import { Router } from "express";
const router = Router();
import {dirname } from "path";

router.get("/", (request, response) => {
    const rootDir = dirname (import.meta.dirname);
    response.sendFile("pokemon.json", {root: rootDir})
});

export default router;