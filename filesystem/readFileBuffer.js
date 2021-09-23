const fs = require("fs");

/**
 * readFileCallback handles error if the file doesn't exist,
 * otherwise logs out the content of the file.
 * @param {object} error The error object.
 * @param {string} content The content of the file.
 */
const readFileCallback = (error, content) => {
  if (error) {
    console.log(
      "error: Fail to read file," +
      error.message.split(":")[1].split(",")[0]
    );
    return;
  }
  console.log(content);
};

fs.readFile("./files/loremIpsum.txt", "UTF-8", readFileCallback);
