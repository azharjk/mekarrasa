import express, { Request, Response } from "express";

const HOST = '0.0.0.0';
const PORT = 5000;

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
  res.render('pages/index');
});

app.get('/products', (req: Request, res: Response) => {
  res.render('pages/products');
});

app.get('/about', (req: Request, res: Response) => {
  res.render('pages/about');
});

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on host ${HOST} and port ${PORT}`);
});
