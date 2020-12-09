import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import helmet from 'helmet';

const app = express();
app.use(helmet());

app.all("/", (req, res) => {
    res.send("XdD")
})

export default app;