const fs = require("fs");

const readFileCallback = (error, data) => {
  if (error) {
    console.log(
      "error: Fail to read file," +
      error.message.split(":")[1].split(",")[0]
    );
    return;
  }
  console.log(JSON.parse(data));
};

fs.readFile("coffee.json", "UTF-8", readFileCallback);
