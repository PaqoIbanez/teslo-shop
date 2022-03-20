import { db } from "."
import { IProduct } from "../interfaces";
import { Product } from "../models";

export const getSearchProducts = async (query: string): Promise<IProduct[]> => {

   query = query.toString().toLowerCase();


   await db.connect();
   const products = await Product.find({
      $text: { $search: query } // Indices creados en el modelo del producto (models/product.ts)
   })
      .select('title images price description inStock slug -_id')
      .lean();

   await db.disconnect();

   if (!products) {
      return [];
   }

   return JSON.parse(JSON.stringify(products));
}

export const getProductBySlug = async (slug: string): Promise<IProduct | null> => {
   await db.connect();

   const product = await Product.findOne({ slug })

   await db.disconnect();

   if (!product) {
      return null;
   }

   return JSON.parse(JSON.stringify(product));
}

interface ProdutSlug {
   slug: string;
}

export const getAllProductSlugs = async (): Promise<ProdutSlug[]> => {

   await db.connect();
   const slugs = await Product.find().select('slug -_id').lean();
   await db.disconnect();

   return slugs;

}

export const getAllProducts = async (): Promise<IProduct[]> => {
   await db.connect();

   const products = await Product.find().lean();

   await db.disconnect();

   return JSON.parse(JSON.stringify(products));
}