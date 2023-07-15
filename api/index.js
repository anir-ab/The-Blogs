import express from "express";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";
import cookieParser from "cookie-parser";




const app = express()
app.use(express.json())
app.use(cookieParser);
app.use(cors());

app.use("/api/posts",postRoutes)
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)


app.listen(1234,()=>{
    console.log("haha")
})