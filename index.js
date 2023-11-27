const fs = require("fs");
const path = require("path");
fs.readFile("./files/names.txt", "utf8", (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
fs.writeFile(
  path.join(__dirname, "files", "reeply.txt"),
  "i creted a write file",
  (err) => {
    if (err) throw err;
    console.log("write complete");
    fs.appendFile(
      path.join(__dirname, "files", "reeply.txt"),
      "\n\nyes it is ",
      (err) => {
        if (err) throw err;
        console.log("append complete");
        fs.rename(
          path.join(__dirname, "files", "reeply.txt"),
          path.join(__dirname, "files", "reply.txt"),
          (err) => {
            if (err) throw err;
            console.log("rename complete");
          }
        );
      }
    );
  }
);
