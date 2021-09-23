const fs = require("fs");

// Create a readableStream to read a file
const readableStream = fs.createReadStream(
  "./files/loremIpsum.txt",
  { highWaterMark: 16 }
);

readableStream.on("readable", () => {
  try {
    process.stdout.write(`[${readableStream.read()}]`);

  } catch (error) {
    console.log(error.message);
  }
});

readableStream.on("end", () => {
  console.log("\n\nDone ...");
});
