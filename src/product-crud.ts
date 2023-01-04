import { Product } from "./product";
import * as ProductService from './product-crud-service';
import {Response,Request} from 'express'

export const getProductList = async (req:Request, res:Response) => {
    const productList: Product[] = await ProductService.getAllProducts();
    console.log(`in get ${JSON.stringify(productList)}`)
    try {
        res.status(200).send(
            productList);
      } catch (e:any) {
        res.status(404).send(e.message);
      }
  };

  export const createProduct = async(req:Request, res:Response) => {
    const product:Product = req.body;
    await ProductService.createProduct(product);
    try {
        res.status(200).send({
            message:"Successfully added",
            IsSuccess:true,
            result:product
        })
    } catch (error:any) {
        res.status(404).send(error.message)
    }

  }

  export const updateroduct = async(req:Request, res:Response)  => {
    const product: Product = req.body;
    await ProductService.updateProducts(product);
    try {
        res.status(200).send({
            message: "Successfully updated",
             IsSuccess: true,
             result: ""
        });
      } catch (e:any) {
        res.status(404).send(e.message);
      }
  };

  export const deleteproduct = async(req:Request, res:Response) => {
    const productID: number = req.body['id'];
    await ProductService.deleteProducts(productID);
    try {
        res.status(200).send({
            message: "Successfully deleted",
             IsSuccess: true,
             result: ""
        });
      } catch (e:any) {
        res.status(404).send(e.message);
      }
  };