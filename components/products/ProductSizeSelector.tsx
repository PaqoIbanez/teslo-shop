import { FC } from "react"
import { ISize } from "../../interfaces";
import { Box, Button } from '@mui/material';

interface Props {
   selectedSize?: ISize | string;
   sizes: ISize[];
   onSelectedSize: (size: ISize) => void;
}

export const ProductSizeSelector: FC<Props> = ({ selectedSize, sizes, onSelectedSize }) => {

   return (
      <Box>
         {
            sizes.map(size => (
               <Button
                  key={size}
                  size='small'
                  sx={selectedSize === size ? { textDecoration: 'underline', backgroundColor: '#000', color: '#fff' } : {}}
                  onClick={() =>  onSelectedSize(size)}
               >
                  {size}
               </Button>
            ))
         }
      </Box>
   )
}
