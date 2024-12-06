const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (_, res) => {
	res.json({ "@meta": "Welcome to the vide-with-cat server!" });
});

app.listen(process.env.PORT, () => {
	console.log(`Running on http://localhost:${process.env.PORT}`);
});
