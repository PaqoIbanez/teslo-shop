import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
   palette: {
      mode: 'dark',
      background: {
         default: '#242931',
         paper: '#2E3440'
      },
      primary: {
         main: '#2E3440'
      },
      secondary: {
         main: '#5E81AC'
      }
   },
   typography: {
      allVariants: {
         color: 'white'
      }
   },
   components: {
      MuiLink: {
         defaultProps: {
            underline: 'none',
         },
      },
      MuiAppBar: {
         defaultProps: {
            elevation: 0,
            position: 'fixed',
         },
         styleOverrides: {
            root: {
               backgroundColor: 'dark',
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
            color: 'primary',
         },
         styleOverrides: {
            root: {
               textTransform: 'none',
               boxShadow: 'none',
               borderRadius: 10,
               ":hover": {
                  opacity: 0.9,
                  transition: 'all 0.3s ease-in-out'
               },
               color: 'white'
            }
         }
      },


      MuiCard: {
         defaultProps: {
            elevation: 0
         },
         styleOverrides: {
            root: {
               boxShadow: '0px 5px 5px rgba(0,0,0,0.05)',
               borderRadius: '10px',
            }
         }
      }

   }
});