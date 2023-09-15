// imports
import express from 'express';
import cors from 'cors';

import {userRoutes} from "./routes/user-routes.js";

// create express app
const app = express();

// enable cors
app.use(cors());

// enable json body parsing
app.use(express.json());

// define root route
app.get('/', (req, res) => {
    res.send();
});
// define routes
app.use(userRoutes);

// start express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});