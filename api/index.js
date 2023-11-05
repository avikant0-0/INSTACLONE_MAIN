import express from "express";
import bodyParser from "body-parser";
import functions from "./apiCalls.js";
import cors from "cors";
const { createUser } = functions;
// this lets us recieve data
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.post("/createUser", (req, res) => {
  const body = req.body;
  // console.log(body);
  createUser(body.firstName, body.lastName, body.userName).then((data) =>
    res.json(data)
  );
});

app.listen(3001, () => console.log("started"));
