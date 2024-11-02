import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import {menuRouter} from "./routes/menuRoute";
import {categoryRouter} from "./routes/categoryRoute";
import {dishesRouter} from "./routes/dishRoute";

const app = express();
const port = 5050;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/menu', menuRouter);
app.use('/api/category', categoryRouter);
app.use('/api/dish', dishesRouter);

// Async MongoDB connection
const startServer = async () => {
    try {
        await mongoose.connect('mongodb://localhost/bigrestsales');
        console.log('Connected to MongoDB');
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); // Закрыть приложение при ошибке
    }
};

startServer().catch((error) => {
    console.error('Failed to start server:', error);
});

// Simple test API
app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to Bigrestsales API');
});