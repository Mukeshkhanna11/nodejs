const fsPromises = require("fs").promises;
const path = require("path");
// fs.readFile("./files/names.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(
      path.join(__dirname, "files", "names.txt"),
      "utf8"
    );
    console.log(data);
    await fsPromises.writeFile(
      path.join(__dirname, "files", "promisewrite.txt"),
      data
    );
    await fsPromises.appendFile(
      path.join(__dirname, "files", "promisewrite.txt"),
      "\n\nhi there how are you"
    );
    await fsPromises.rename(
      path.join(__dirname, "files", "promisewrite.txt"),
      path.join(__dirname, "files", "promiseupdate.txt")
    );
    const newData = await fsPromises.readFile(
      path.join(__dirname, "files", "promiseupdate.txt"),
      "utf8"
    );
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};
fileOps();

// fs.writeFile(
//   path.join(__dirname, "files", "reeply.txt"),
//   "hi my name is mukesh khanna",
//   (err) => {
//     if (err) throw err;
//     console.log("write complete");
//     fs.appendFile(
//       path.join(__dirname, "files", "reeply.txt"),
//       "\n\nnice to meet you",
//       (err) => {
//         if (err) throw err;
//         console.log("append complete");
//         fs.rename(
//           path.join(__dirname, "files", "reeply.txt"),
//           path.join(__dirname, "files", "reply.txt"),
//           (err) => {
//             if (err) throw err;
//             console.log("rename complete");
//           }
//         );
//       }
//     );
//   }
// );
