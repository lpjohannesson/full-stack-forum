import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});