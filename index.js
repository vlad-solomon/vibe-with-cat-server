const express = require("express");
const cors = require("cors");
const youtube = require("scrape-youtube");

require("dotenv").config();

const app = express();
app.use(cors());

app.get("/", (_, res) => {
	res.json({ "@meta": "Welcome to the vide-with-cat server!" });
});

app.get("/videos", async (req, res) => {
	const { title } = req.query;
	const { videos } = await youtube.search(title, { type: "video", request: { headers: { "Accept-Language": "en" } } });

	res.json(videos);
});

app.listen(process.env.PORT, () => {
	console.log(`Running on http://localhost:${process.env.PORT}`);
});
