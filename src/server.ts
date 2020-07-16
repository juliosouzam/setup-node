import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ status: true }));

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('running'));
