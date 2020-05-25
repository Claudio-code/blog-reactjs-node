import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Contact from '../Contact';
import { Typography, ContainerHeader, HeaderMenus } from './styles';
import history from '../../services/history';

export default function Header() {
  const [status, setStatus] = useState(false); 
  const goToDashboard = () => history.push('/');
  const goToContact = () => setStatus(true);

  return (
    <div>
      <AppBar position="static" style={{backgroundColor: '#424242' }}>
        <Toolbar variant="dense">
          <ContainerHeader>
            <Typography variant="h6" color="inherit">
              Rockr Blog
            </Typography>
            <HeaderMenus>
              <Typography variant="h6" color="inherit" onClick={goToDashboard}>
                Posts
              </Typography>
              <Typography variant="h6" color="inherit" onClick={goToContact}>
                Contact
              </Typography>
            </HeaderMenus>
          </ContainerHeader>
        </Toolbar>
      </AppBar>
        <Contact status={status} setStatus={setStatus} />
    </div>
  );
}