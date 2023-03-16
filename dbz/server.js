console.log(`It's OVER 9000!!!`);

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoClient = require("mongodb").MongoClient;
const connectionString =
  "mongodb+srv://[username]:[password]@cluster0.ppav2k1.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(connectionString)
  .then((client) => {
    console.log("Connected to Database");
    const db = client.db("dbz-quotes");
    const quotesCollection = db.collection("quotes");

    app.set("view engine", "ejs");

    // Make sure you place body-parser before your CRUD handlers!
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static("public"));
    app.use(bodyParser.json());

    // All handlers after Body Parser
    app.get("/", (req, res) => {
      quotesCollection
        .find()
        .toArray()
        .then((result) => {
          console.log(result);
          res.render("index.ejs", { quotes: result });
        })
        .catch((error) => console.error(error));
    });

    app.post("/quotes", (req, res) => {
      quotesCollection
        .insertOne(req.body)
        .then((result) => {
          res.redirect("/");
        })
        .catch((error) => console.error(error));
    });

    app.put("/quotes", (req, res) => {
      quotesCollection
        .findOneAndUpdate(
          { name: "Goku" },
          {
            $set: {
              name: req.body.name,
              quote: req.body.quote,
            },
          },
          {
            upsert: true,
          }
        )
        .then((result) => {
          console.log(result);
          res.json("Success");
        })
        .catch((error) => console.error(error));
    });

    app.delete("/quotes", (req, res) => {
      quotesCollection
        .deleteOne({
          name: req.body.name,
        })
        .then((result) => {
          if (result.deletedCount === 0) {
            return res.json("No quote do delete");
          }
          res.json("Deleted Vegeta's quote");
        })
        .catch((error) => console.log(error));
    });

    app.listen(3000, () => {
      console.log(`Listening on port :3000`);
    });
  })
  .catch((error) => console.error(error));
