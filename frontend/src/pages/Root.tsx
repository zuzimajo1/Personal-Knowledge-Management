import React from 'react'
import { HomeContainer, NavbarContainer, SideBarBox } from '../styles/Home.styled'
import { TypographyText } from '../components'
import { Search, Archive, Share, Delete, FileCopy, Save, Print, } from '@mui/icons-material'
import { SearchBarContainer, SearchComponent, StyledInputBase } from '../styles/SearchBar.styled'
import { List, Divider, ListItem, ListItemText, ListItemIcon, ListItemButton, Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import { Container } from '../styles/Container.styled'


export const Root: React.FC = () => {

  const actions = [
  { icon: <FileCopy />, name: 'Copy' },
  { icon: <Save />, name: 'Save' },
  { icon: <Print />, name: 'Print' },
  { icon: <Share />, name: 'Share' },
];



  return (
    <HomeContainer>
      <NavbarComponent/>
      <ContentComponent>
      <SideBar/>
      </ContentComponent>
      <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial ariaLabel='' sx={{position: 'absolute', bottom: 16, right: 16}}
        icon={<SpeedDialIcon />}
      >
        {actions.map((action, index)=>(
          <SpeedDialAction key={index} icon={action.icon} title={action.name} />
        ))}
      </SpeedDial>
    </Box>
    </HomeContainer>
  )
}



const NavbarComponent : React.FC = () =>{
  return (    
    <NavbarContainer> 
      <TypographyText text='Insight Journal' textAlign='left' fontSize='1.5rem' />
      <SearchComponent>
        <SearchBarContainer>
        <Search />
        </SearchBarContainer>
          <StyledInputBase  placeholder='Search...' inputProps={{ 'aria-label': 'search' }}/>
      </SearchComponent>
    </NavbarContainer>

  )
}

const ContentComponent : React.FC<{children?:React.ReactNode}> = ({children})=>{
  return (
    <Container display='flex' position='absolute' top='6vh' height='94vh' >
      {children}
    </Container>
  )
}


const SideBar : React.FC = ()=>{

  const ListOptions = [
    { text: "Archived", icon: <Archive /> },
    { text: "Shared", icon: <Share/>  },
    { text: "Trash", icon: <Delete /> },
  ];


  return(
    <SideBarBox role='presentation'>
    
    <List>
      {ListOptions.map((props, index)=>(
        <ListItem key={index}>
          <ListItemButton>
            <ListItemIcon>
              {props.icon}
            </ListItemIcon>
            <ListItemText primary={props.text} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </SideBarBox>
 
  )
}



