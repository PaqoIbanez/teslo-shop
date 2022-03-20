import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { IProduct } from '../../../interfaces';
import { Product } from '../../../models';

type Data =
   | { message: string }
   | IProduct[]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
   switch (req.method) {
      case 'GET':
         return searchProducts(req, res);

      default:
         res.status(400).json({ message: 'Bad request' })
   }
}

const searchProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

   let { q = '' } = req.query;

   if (q.length === 0) {
      return res.status(400).json({ message: 'Debe de especificar el query de busqueda' })
   }

   q = q.toString().toLowerCase();

   await db.connect();

   const productos = await Product.find({
      $text: { $search: q } // Indices creados en el modelo del producto (models/product.ts)
   }).select('title images price inStock slug -_id')
      .lean();

   await db.disconnect();
   return res.status(400).json(productos);
}