import  { ReactNode } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

interface HearderChildreen {
  children: ReactNode
}

export const Hearder = ({children}: HearderChildreen) =>  {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="button"
            sx={{ mr: 2 }}
          >
            <LocalFireDepartmentIcon fontSize='large' color="inherit" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Shopper
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
