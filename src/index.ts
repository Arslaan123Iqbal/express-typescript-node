import * as cors from 'cors';
import * as express from 'express';
import * as dotenv from "dotenv";
import mongoose from 'mongoose';
import helmet from "helmet";
import * as productCRUD from './product-crud'

dotenv.config();

if (!process.env.PORT) {
  console.log(`Error to get ports`);
    process.exit(1);
 }

 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to NodeJs App using TypeScript'));
app.get("/products",productCRUD.getProductList)
app.post("/productcreate",productCRUD.createProduct);
app.post("/productupdate",productCRUD.updateroduct);
app.post("/productdelete",productCRUD.deleteproduct);
