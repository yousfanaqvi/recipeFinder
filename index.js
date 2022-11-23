require('dotenv').config()
const express = require("express");
const app = express();
const axios =require('axios') 
const path = require("path");
const logger = require("morgan");
const cors = require("cors");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());








// // app.get("/api/test", (req, res) => {
// //   res.json("test");
// // });

// app.get('/recipes/:query', async (req, res) => {
//   let quantity,ingredient ="";

//   const response = await axios.get(
//       `https://api.edamam.com/api/nutrition-data?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}&nutrition-type=logging&ingr=2%20tablespoon%20olive%20oil
// `
//   )
//   console.log(response.data.hits)
//   res.json(response.data.hits)
// })


app.use(express.static(path.join(__dirname, "./frontend/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./frontend/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running on port ${port}`));

module.exports = app;
