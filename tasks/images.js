import fs from "fs";
import sharp from "sharp";

// read all png is static/assets/sketches
// convert to webp
// save in static/assets/sketches

const dir = "static/assets/sketches";
const files = fs.readdirSync(dir).filter((d) => d.includes(".png"));

for (const file of files) {
	console.log(file);
	await sharp(`${dir}/${file}`)
		.webp({ quality: 70 })
		.toFile(`${dir}/${file.replace(".png", ".webp")}`);
}
