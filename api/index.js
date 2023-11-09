import express from 'express';
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './Routes/user.route.js'
import authRouther from './Routes/auth.route.js'
import cookieParser from 'cookie-parser';

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('connected to Mongo');
}).catch((err) => {
    console.log(err);
})

const app = express();

app.use(express.json())

app.use(cookieParser())

app.listen(3000, () => {
    console.log('running on port 300');
}
);

app.use("/api/user", userRouter);
app.use("/api/auth", authRouther);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'internal server error'
    return res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        message,
    })
})