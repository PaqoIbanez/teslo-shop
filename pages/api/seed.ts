import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database';
import { seedDatabase } from '../../database';
import { Product } from '../../models';
import User from '../../models/user';

type Data = { message: string; }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

   if (process.env.NODE_ENV == 'production') {
      return res.status(401).json({ message: 'No tiene acceso a este API' });
   }

   await db.connect();
   await Product.deleteMany();
   await Product.insertMany(seedDatabase.initialData.products);
   await User.deleteMany();
   await User.insertMany(seedDatabase.initialData.users);
   await db.disconnect();

   res.status(200).json({ message: 'Todo correcto bb' })

}