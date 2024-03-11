import express from "express";
const app = express();
import indexRouter from "./routes/index.js";

const port = 3000;

app.use("/", indexRouter);

app.listen(port, () => {
    console.log(`PokeDatabase app is now listening on port ${port}`)
});

