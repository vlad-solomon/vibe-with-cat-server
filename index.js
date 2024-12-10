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
	try {
		const { title } = req.query;
		const { videos } = await youtube.search(title, {
			type: "video",
			request: { headers: { "Accept-Language": "en" } },
		});

		res.json(videos);
	} catch (error) {
		console.error("Error fetching videos:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});

app.listen(process.env.PORT, () => {
	console.log(`Running on http://localhost:${process.env.PORT}`);
});
