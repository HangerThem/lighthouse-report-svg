import express from "express";
import generateSVG from "./generateSVG.js";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const { perf = 0, acc = 0, best = 0, seo = 0, pwa = 0 } = req.query;

  const stats = [
    parseFloat(perf),
    parseFloat(acc),
    parseFloat(best),
    parseFloat(seo),
  ];

  if (stats.some(isNaN)) {
    res.status(400).send("Invalid stats provided.");
    return;
  }

  const svg = generateSVG(stats, parseFloat(pwa));

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
});

app.listen(port, () => {
  console.log(`SVG generator app listening at http://localhost:${port}`);
});
