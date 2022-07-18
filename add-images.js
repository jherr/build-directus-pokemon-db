const fs = require("fs");

const files = JSON.parse(fs.readFileSync("files.json", "utf8").toString());
const pokemon = JSON.parse(fs.readFileSync("pokemon.json", "utf8").toString());

fs.writeFileSync(
  "pokemon-with-images.json",
  JSON.stringify(
    pokemon
      .map((p) => ({
        ...p,
        image: files.find((f) => f.title === p.name)?.id,
      }))
      .filter((p) => p.image),
    null,
    2
  )
);
