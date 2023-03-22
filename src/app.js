import express from "express";
import mongoose from "mongoose";
import routerProducts from "./routes/products";

const app = express();
app.use(express.json())
app.use("/api",routerProducts)

mongoose.connect("mongodb://127.0.0.1:27017/we17303")
.then(()=>{
    console.log("Connect thanh cong !")
})
.catch(err => console.log(err))

const connect = mongoose.connection;
connect.on("error", err => console.log(err))
connect.once("open",()=>console.log("Connect db thanh cong"))

export const viteNodeApp = app