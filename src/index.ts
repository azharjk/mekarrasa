import express, { Request, Response } from "express";

const PORT = 5000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.render('pages/index');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
