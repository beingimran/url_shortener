const express = require("express");
const router = require("./routes/url");
const { handleMongoConnect } = require("./connectmongo");

const app = express();
const PORT = 8000;

handleMongoConnect("mongodb://127.0.0.1:27017/UrlShortner").then(() => {
  console.log("mongoDB is connected");
});

app.use(express.json());
app.use("/url", router);

app.listen(PORT, () => {
  console.log(`Server is started on PORT:${PORT}`);
});
