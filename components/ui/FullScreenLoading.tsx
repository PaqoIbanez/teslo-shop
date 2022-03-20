import { Box, CircularProgress, Typography } from "@mui/material"

export const FullScreenLoading = () => {
   return (
      <Box
         flexDirection='column'
         display='flex'
         alignItems='center'
         justifyContent='center'
         height='calc(100vh - 250px)'
      >
         <CircularProgress size={50} thickness={2} sx={{ mb: 1 }} color='inherit' />
         <Typography variant='subtitle1'>Cargando...</Typography>

      </Box>
   )
}
