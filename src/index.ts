import express, { Request, Response } from "express";

import { getProduct, getProducts, getShowcaseProducts } from "./db";

const HOST = "0.0.0.0";
const PORT = 5000;

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/api/v1/products", async (req: Request, res: Response) => {
  const products = await getProducts();

  res.json(products);
});

app.get("/api/v1/showcase-products", async (req: Request, res: Response) => {
  const showcaseProducts = await getShowcaseProducts();

  res.json(showcaseProducts);
});

app.get("/", (req: Request, res: Response) => {
  res.render("pages/index");
});

app.get("/products", (req: Request, res: Response) => {
  res.render("pages/products");
});

app.get(
  "/products/:id",
  async (req: Request<{ id: number }>, res: Response) => {
    const product = await getProduct(req.params.id);

    if (!product) {
      res.render("pages/404");
      return;
    }

    res.render("pages/product-detail", { product });
  }
);

app.get("/about", (req: Request, res: Response) => {
  res.render("pages/about");
});

app.get("*", (req: Request, res: Response) => {
  res.render("pages/404");
});

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on host ${HOST} and port ${PORT}`);
});
