import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database';
import { IUser } from '../../../interfaces';
import User from '../../../models/user';
import bcrypt from 'bcryptjs';
import { jwt, validations } from '../../../utils';

type Data =
   | { message: string }
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
         return registerUser(req, res);

      default:
         break;
   }
   res.status(200).json({ message: 'Example' })
}

const registerUser = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

   const { name = '', email = '', password = '' } = req.body as { name: string, email: string, password: string };

   if (password.length < 6) {
      return res.status(400).json({
         message: 'La contrasenia debe de ser minimo de 6 caracteres'
      });
   }

   if (name.length < 2) {
      return res.status(400).json({
         message: 'El nombre debe de ser minimo de 2 caracteres'
      });
   }

   if (!validations.isValidEmail(email)) {
      return res.status(400).json({
         message: 'El correo no es valido'
      });
   }

   await db.connect();
   const existsEmail = await User.findOne({ email });

   if (existsEmail) {
      await db.disconnect();
      return res.status(400).json({ message: 'El correo ya existe' });
   }

   const newUser = new User({
      name,
      email: email.toLowerCase(),
      password: bcrypt.hashSync(password),
      role: 'client'
   })

   try {
      await newUser.save({ validateBeforeSave: true });
   } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Revisar logs del servidor' });
   }

   await db.disconnect();

   return res.status(200).json({
      token: jwt.signToken(newUser._id, email),
      user: {
         email,
         name,
         role: newUser.role
      }
   });
}
