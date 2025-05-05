import express from 'express';
import translateRouter from './routes/translate';
import normalizeRouter from './routes/normalize';
import speakRouter from './routes/speak';
import speechRouter from './routes/speech';

const app = express();

app.use(express.json());

app.use('/translate', translateRouter);
app.use('/normalize', normalizeRouter);
app.use('/speak', speakRouter);
app.use('/speech', speechRouter);

export default app;
