const fs = require("fs");
const path = require("path");
const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {
  encoding: "utf8",
});
const ws = fs.createWriteStream(path.join(__dirname, "files", "newlorem.txt"));
// rs.on("data", (datacode) => {
//   ws.write(datacode);
// });
rs.pipe(ws);
