import { FC } from "react"
import { ISize } from "../../interfaces";
import { Box, Button } from '@mui/material';

interface Props {
   selectedSize?: ISize | string;
   sizes: ISize[];
   setSelectedSize: (selectedSize: ISize) => void;
}

export const ProductSizeSelector: FC<Props> = ({ selectedSize, sizes, setSelectedSize }) => {
   return (
      <Box>
         {
            sizes.map(size => (
               <Button
                  key={size}
                  size='small'
                  sx={selectedSize === size ? { textDecoration: 'underline' } : {}}
                  onClick={() => setSelectedSize(size)}
               >
                  {size}
               </Button>
            ))
         }
      </Box>
   )
}
