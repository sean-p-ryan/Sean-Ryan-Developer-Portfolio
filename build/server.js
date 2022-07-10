"use strict"
const express = require("express")
const path = require("path")
const serverless = require("serverless-http")
const app = express()
const bodyParser = require("body-parser")
const router = express.Router()

app.use(bodyParser.json())
app.use("/.netlify/functions/server", router) // path must route to lambda
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", router)

router.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" })
  res.write("index.html")
  res.end()
})

module.exports = app
module.exports.handler = serverless(app)