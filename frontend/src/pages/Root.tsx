import React from 'react'
import { HomeContainer, NavbarContainer, SideBarBox } from '../styles/Home.styled'
import { TypographyText } from '../components'
import { Search, Archive, Share, Delete, FileCopy, Save, Print, } from '@mui/icons-material'
import { SearchBarContainer, SearchComponent, StyledInputBase } from '../styles/SearchBar.styled'
import { List, Divider, ListItem, ListItemText, ListItemIcon, ListItemButton, Box, SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import { Container, MainContainer } from '../styles/Container.styled'


export const Root: React.FC = () => {




  return (
    <HomeContainer>
      <NavbarComponent/>
      <ContentComponent>
      <SideBar/>
      <Home/>
      </ContentComponent>
    </HomeContainer>
  )
}


const Home: React.FC = () => {

  const actions = [
  { icon: <FileCopy />, name: 'Copy' },
  { icon: <Save />, name: 'Save' },
  { icon: <Print />, name: 'Print' },
  { icon: <Share />, name: 'Share' },
];



  return (
    <>
    <MainContainer>
      <TypographyText text='Welcome to Insight Journal' textAlign='center' fontSize='2rem' fontWeight='600' margin='var(--margin-lg) 0 0 0' />
      <TypographyText text='Your personal space to capture thoughts, ideas, and reflections.' textAlign='center' fontSize='1.2rem' fontWeight='400' margin='var(--margin-sm) 0 0 0' />    
    </MainContainer>
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 ,position: 'absolute', bottom: 16, right: 16  }}>
      <SpeedDial ariaLabel='' sx={{ }}
        icon={<SpeedDialIcon sx={{overflow: 'hidden'}} />}
        >
        {actions.map((action, index)=>(
          <SpeedDialAction key={index} icon={action.icon} title={action.name} />
        ))}
      </SpeedDial>
      </Box>
    </>
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
    <Container display='flex' width='100vw' height='100vh' flexDirection='row' position='relative'>
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
    <List sx={{ margin: 'var(--margin-xl) 0 0 0' }}>
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



