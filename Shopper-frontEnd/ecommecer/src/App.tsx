import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from './constants/theme';
import { AppRouter } from './router/AppRouter';


export const App: React.FC = () => {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </>
  )
}

