import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const Sidebar = () => {
  const txt = ['In Tai Lieu', 'Xem May In', 'Hoa Don', 'Lich su in', 'Phan Hoi'];
  const sizeNav = '200px';

  return (
    <Box sx={{
      display: { sm: 'flex' },
      bgcolor: '#fff',
      width: sizeNav,
      height: '100%',
      marginTop: '2px'
    }}>
      <List sx={{ width: '100%' }}>
        {txt.map((text, idx) => (
          <ListItem key={idx} component='a' href={idx === 0 ? '/print' : '/'}>
            <ListItemButton style={{ borderRadius: '30px' }}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </Box>
  );
}

export default Sidebar;
