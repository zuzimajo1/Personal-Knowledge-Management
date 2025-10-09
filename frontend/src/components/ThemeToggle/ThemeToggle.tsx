import React, { useContext } from 'react'
import { Container } from '../../styles/Container.styled'
import { IconButton, useTheme } from '@mui/material'
import { Brightness3, WbSunny } from '@mui/icons-material'
import { ColorModeContext } from '../../ColorModeContent'

export const ThemeToggle: React.FC = () => {
      const theme = useTheme();
      const { toggleThemeMode } = useContext(ColorModeContext);

  return (
    <Container display='flex' justifyContent="space-between" border='1px solid gray' height='auto' width='auto' backgroundColorLight='#e9ebeeff' borderRadius='1.5rem'>
          <IconButton size='small' onClick={toggleThemeMode}  sx={{ visibility: theme.palette.mode === 'light' ? 'visible' : 'hidden', animation: 'fadeIn 0.5s', transition: 'opacity 0.5s', transitionDelay: '0.3s', }}>
            <WbSunny fontSize='medium' htmlColor='#a7a738ff'  />
          </IconButton>
          <IconButton size='small' onClick={toggleThemeMode} sx={{ visibility: theme.palette.mode === 'dark' ? 'visible' : 'hidden', animation: 'fadeIn 0.5s' , transition: 'opacity 0.5s', transitionDelay: '0.3s' }}>
          <Brightness3 fontSize='medium' htmlColor='#4d4d7dff'  />
          </IconButton>
    </Container>
  )
}
