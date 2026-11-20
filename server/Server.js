const express = require("express")
const app = express()
const https = require("https")
const fs = require("fs")

const path = require("path")
const YAML = require("yaml");

const configPath = path.join(__dirname, '../', "config.yaml");

const config = YAML.parse(
    fs.readFileSync(configPath, "utf8")
);
console.log(config)


const server = https.createServer({
    cert: config.CERT,
    key: config.Private
}, app)
