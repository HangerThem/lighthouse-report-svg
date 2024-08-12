import express from "express";
import generateSVG from "./generateSVG";
const app: express.Application = express();
const port = 3000;

app.get("/", (req: express.Request, res: express.Response) => {
  const { perf = "0", acc = "0", best = "0", seo = "0", pwa = "0" } = req.query;

  const stats: number[] = [
    parseFloat(perf as string),
    parseFloat(acc as string),
    parseFloat(best as string),
    parseFloat(seo as string),
  ];

  if (stats.some(isNaN)) {
    res.status(400).send("Invalid stats provided.");
    return;
  }

  const svg: string = generateSVG(stats, parseFloat(pwa as string));

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
});

app.listen(port, () => {
  console.log(`SVG generator app listening at http://localhost:${port}`);
});
