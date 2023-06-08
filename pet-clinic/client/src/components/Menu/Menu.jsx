import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Img } from './menu.styled';

import user64px from '../../assets/user64px.png';

export default function BasicMenu() {

    const { logout } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    //CADA TIPO DE USUÁRIO VOLTA PARA SUA DEVIDA PÁGINA DE ACESSO
    const handleLogout = () => {
      logout();
      const currentPath = location.pathname;
  
      if (currentPath === '/cliente') {
        navigate('/');
      } else if (
        currentPath === '/portal/vet' ||
        currentPath === '/portal/sec'
      ) {
        navigate('/portal/singin');
      }
    };


  return (
    <div>
      <Img>   
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          sx={{ width: 40, height: 60 }}
        > 
          <img src={user64px}></img>
        </Button>
      </Img>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}