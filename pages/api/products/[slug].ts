import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import Product from '../../../models/product';
import { IProduct } from '../../../interfaces';

type Data =
   | { message: string; }
   | IProduct

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
   switch (req.method) {
      case 'GET':
         return getProductBySlug(req, res);

      default:
         res.status(200).json({ message: 'Example' })
   }
}

const getProductBySlug = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

   const { slug } = req.query;

   await db.connect();
   try {
      const product = await Product.findOne({ slug }).select('-_id').lean();
      await db.disconnect();
      return !product
         ? res.status(404)
         : res.status(200).json(product!);
   } catch (error) {
      await db.disconnect();
      console.log(error);
      return res.status(500).json({ message: 'Error desconocido' });
   }
}
