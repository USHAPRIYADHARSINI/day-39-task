// const express = require ("express");
import express from "express";
// const {MongoClient, Db} =  require ("Mongodb");
import {MongoClient, Db} from "mongodb";
// require('dotenv').config()
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import createfileroute from "./routes/createFile.route.js"

const app = express();

app.use(express.json());

const PORT = process.env.PORT ;

// const MONGO_URL = "mongodb://127.0.0.1";
const MONGO_URL = process.env.MONGO_URL;
const client = new MongoClient(MONGO_URL); // phone dial
// top-level await
client.connect(); // call button
console.log("Mongo is connected ✌️😊");

// const createfilerouter = require("router");

// import moment from "moment";

app.get("/", function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
  });

app.use("/", createfileroute);
// var date = (moment().format("MM/DD/YYYY"));
// var date = (moment().format("MMDDYYYY"));
// var time = (moment().format("MMDDYYYYHHmmss"));
// console.log(time)

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
