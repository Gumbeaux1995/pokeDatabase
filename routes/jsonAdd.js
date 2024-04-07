import { Router } from "express";
const router = Router();
import pokemon from "../pokemon.json" with { type: "json" };
// import {dirname } from "path";

router.put("/", (request, response) => {
    // const rootDir = dirname (import.meta.dirname);
    // response.sendFile("pokemon.json", {root: rootDir})
    response.send(pokemon);
});

export default router;