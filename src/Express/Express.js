const express = require("express");
const app = express();
const path = require("path");

const port = process.env.PORT || 8000;

const myPath = path.join(__dirname, "../../public");
app.use(express.static(myPath));

app.get("/", (req, res) => {
  res.send(" i am riaz ahmad");
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`i am listening at the port no ${port}`);
  }
});
