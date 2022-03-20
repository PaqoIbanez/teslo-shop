import { createTheme } from '@mui/material/styles';
import { red, } from '@mui/material/colors';


export const lightTheme = createTheme({
   palette: {
      mode: 'light',
      primary: {
         main: '##1E1E1E'
      },
      secondary: {
         main: '#3A64D8'
      }
   },
   components: {
      MuiLink: {
         defaultProps: {
            underline: 'none',
         },
         styleOverrides: {
            root: {
               color: '#000'
            }
         }
      },
      MuiAppBar: {
         defaultProps: {
            elevation: 0,
            position: 'fixed',
         },
         styleOverrides: {
            root: {
               backgroundColor: 'white',
               height: 60
            },
         }
      },

      MuiTypography: {
         styleOverrides: {
            h1: {
               fontSize: 30,
               fontWeight: 600
            },
            h2: {
               fontSize: 20,
               fontWeight: 400
            },
            subtitle1: {
               fontSize: 15,
               fontWeight: 500,
               padding: 0,
               margin: '-3px 0px'
            },
            subtitle2: {
               fontSize: 15,
               fontWeight: 200,
               padding: 0,
               marginBottom: 6
            }
         }
      },


      MuiButton: {
         defaultProps: {
            variant: 'contained',
            size: 'small',
            disableElevation: true,
         },
         styleOverrides: {
            root: {
               textTransform: 'none',
               boxShadow: 'none',
               borderRadius: 10,
               ":hover": {
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  transition: 'all 0.3s ease-in-out',
               }
            }
         }
      },


      MuiCard: {
         defaultProps: {
            elevation: 0
         },
         styleOverrides: {
            root: {
               boxShadow: '0 8px 24px rgb(149 157 165 / 20%)',
               borderRadius: '10px',
            }
         }
      }

   }
});