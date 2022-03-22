import type { NextApiRequest, NextApiResponse } from 'next'
import { IUser } from '../../../interfaces';
import { db } from '../../../database';
import User from '../../../models/user';
import bcrypt from 'bcryptjs';
import { jwt } from '../../../utils';

type Data =
   | { message: string; }
   | {
      token: string,
      user: {
         email: string;
         name: string;
         role: string;
      }
   }


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

   switch (req.method) {
      case 'POST':

         return loginUser(req, res);

      default:
         return res.status(400).json({ message: 'Bad Request' });

   }

}

const loginUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
   const { email = '', password = '' } = req.body;
   console.log(email + password);

   await db.connect();
   const user = await User.findOne({ email }).lean();
   await db.disconnect();

   if (!user) {
      return res.status(400).json({ message: 'Correo y/o contrasenia invilada - EMAIL' });
   }

   if (!bcrypt.compareSync(password, user.password!)) {
      res.status(400).json({ message: 'Correo y/o contrasenia invilada - PASSWORD' });
   }

   const { _id, name, role } = user;

   const token = jwt.signToken(_id, email);

   return res.status(200).json({
      token,
      user: {
         email,
         name,
         role
      }
   });
}