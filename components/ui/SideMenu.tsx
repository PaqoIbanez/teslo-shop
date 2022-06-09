import { AccountCircleOutlined, AdminPanelSettingsOutlined, AirplaneTicketOutlined, CategoryOutlined, ChildCareOutlined, ConfirmationNumberOutlined, EscalatorWarningOutlined, FemaleOutlined, KeyOffOutlined, KeyOutlined, LoginOutlined, MaleOutlined, Person, PersonAddAlt1Outlined, PersonPinCircleOutlined, PersonPinCircleRounded, SearchOutlined, VpnKeyOutlined } from "@mui/icons-material"
import { Drawer, Input, InputAdornment, List, ListItem, IconButton, Button, ListItemIcon, ListItemText, Divider, ListSubheader } from '@mui/material';
import { Box } from "@mui/system"
import { KeyboardEvent, useContext, useState } from 'react';
import { AuthContext, UIContext } from "../../context";
import { useRouter } from 'next/router';

export const SideMenu = () => {

   const router = useRouter();
   const { isMenuOpen, showMenu } = useContext(UIContext);
   const { logout, isLoggedIn, user } = useContext(AuthContext);
   const [searchTerm, setSearchTerm] = useState('');

   const navigateTo = (url: string) => {
      showMenu(false);
      router.push(url);
   }

   const onSearchTerm = () => {
      if (searchTerm.trim().length > 0) {
         navigateTo(`/search/${searchTerm}`)
      }
   }

   const onLogout = () => {
      showMenu(false)
      logout();
   }

   const userLogin = () => {
      showMenu(false)
      router.push(`/auth/login?p=${router.asPath}`)
   }

   return (
      <Drawer
         open={isMenuOpen}
         anchor='right'
         onClose={() => showMenu(false)}
         sx={{ backdropFilter: 'blur(3px)', transition: 'all 0.5s ease-out' }}
      >
         <Box >
            <List>
               <ListItem>
                  <Input
                     autoFocus
                     onChange={(e) => setSearchTerm(e.target.value)}
                     onKeyPress={(e) =>
                        e.key === 'Enter' ? onSearchTerm() : null}
                     value={searchTerm}
                     type='text'
                     placeholder="Buscar..."
                     endAdornment={
                        <InputAdornment position="end">
                           <IconButton
                              onClick={onSearchTerm}
                           >
                              <SearchOutlined />
                           </IconButton>
                        </InputAdornment>
                     }
                  />
               </ListItem>

               {
                  !isLoggedIn
                     ? <ListItem button onClick={userLogin}>
                        <ListItemIcon>
                           <VpnKeyOutlined />
                        </ListItemIcon>
                        <ListItemText primary="Ingresar" />
                     </ListItem>
                     :
                     <>
                        <ListItem button>
                           <ListItemIcon>
                              <AccountCircleOutlined />
                           </ListItemIcon>
                           <ListItemText primary="Perfil" />
                        </ListItem>
                        <ListItem button>
                           <ListItemIcon>
                              <ConfirmationNumberOutlined />
                           </ListItemIcon>
                           <ListItemText primary="Mis ordenes" />
                        </ListItem>
                        <ListItem button onClick={onLogout}>
                           <ListItemIcon>
                              <LoginOutlined />
                           </ListItemIcon>
                           <ListItemText primary="Salir" />
                        </ListItem>
                     </>
               }

               <ListItem button sx={{ display: { xs: '', sm: 'none' } }}
                  onClick={() => navigateTo('/category/men')}
               >
                  <ListItemIcon>
                     <MaleOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Hombres" />
               </ListItem>
               <ListItem button sx={{ display: { xs: '', sm: 'none' } }}
                  onClick={() => navigateTo('/category/women')}
               >
                  <ListItemIcon>
                     <FemaleOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Mujeres" />
               </ListItem>
               <ListItem button sx={{ display: { xs: '', sm: 'none' } }}
                  onClick={() => navigateTo('/category/kid')}
               >
                  <ListItemIcon>
                     <EscalatorWarningOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Ninios" />
               </ListItem>
               {
                  user?.role === 'admin' && (
                     <>
                        <Divider />
                        <ListSubheader>Admin Panel </ListSubheader>
                        <ListItem button>
                           <ListItemIcon>
                              <CategoryOutlined />
                           </ListItemIcon>
                           <ListItemText primary="Productos" />
                        </ListItem>
                        <ListItem button>
                           <ListItemIcon>
                              <ConfirmationNumberOutlined />
                           </ListItemIcon>
                           <ListItemText primary="Ordenes" />
                        </ListItem>
                        <ListItem button>
                           <ListItemIcon>
                              <AdminPanelSettingsOutlined />
                           </ListItemIcon>
                           <ListItemText primary="Usuarios" />
                        </ListItem>
                     </>
                  )
               }

            </List>
         </Box>
      </Drawer>
   )
}
