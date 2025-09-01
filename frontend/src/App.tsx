import { useState, useMemo, createContext } from 'react'
import { createTheme, CssBaseline, ThemeProvider, type PaletteMode } from '@mui/material'
import { SnackbarProvider } from 'notistack';
import { RouterProvider } from 'react-router';

import './App.css'
import { router } from './utils/router';


const ColorModeContext = createContext({ toggleThemeMode:()=> { } });

const App = () => {
  const [mode, setmode] = useState<PaletteMode>("light");

  
  const colorMode = useMemo(
    ()=>({
    toggleThemeMode : () => {
      setmode((previous: PaletteMode)=> (previous === "light"? "dark" : "light"));
    },
  }), 
  [],
);


  //Update the theme only when mode changes
  const theme = useMemo (
    ()=>
      createTheme({
        palette:{
          mode,
        },
      }),[mode],
    );

  
  return (
    <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </SnackbarProvider>
  )
}

export default App
