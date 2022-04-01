import express from "express";
import cors from "cors";
import pg from 'pg-promise';
import routes from "./routes/authRoutes";

const app = express();

const port = 3005;

export const db = pg()({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '3YgJ4#zyVQ%TozKq',
    database: 'finalproject'
});

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(port, () => console.log(`Server is listening on port ${port}.`));