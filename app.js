import express from "express";
const app = express();
import indexRouter from "./routes/index.js";
// import jsonAddRouter from "./routes/name.js"
import pokemon from "./pokemon.json" with { type: "json" };


const port = 3000;

//use JSON middleware
app.use(express.json());

app.use("/:name", indexRouter);
// app.use("/:name/charmander", indexRouter)
app.use("/", indexRouter);

app.listen(port, () => {
    console.log(`PokeDatabase app is now listening on port ${port}`)
});
