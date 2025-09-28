import React from 'react'
import { ContentContainer, HomeContainer, NavbarContainer, SideBarBox } from '../styles/Home.styled'
import { TypographyText } from '../components'
import { Archive, Share, Delete, Note, } from '@mui/icons-material'
import { List, ListItem, ListItemText, ListItemIcon, ListItemButton} from '@mui/material'
import { Container } from '../styles/Container.styled'
import { Navbar } from '../components/NavigationBar/Navbar'
import Notes from '../components/Notes/Notes'


export const Root: React.FC = () => {

  return (
    <HomeContainer>
      <Navbar/>
      <ContentComponent>
      <SideBar/>
      <Home/>
      </ContentComponent>
    </HomeContainer>
  )
}


const Home: React.FC = () => {

  return (
    <ContentContainer>
      <TypographyText text='Welcome to Insight Journal' textAlign='center' fontSize='2rem' fontWeight='600' margin='var(--margin-lg) 0 0 0' />
      <TypographyText text='Your personal space to capture thoughts, ideas, and reflections.' textAlign='center' fontSize='1.2rem' fontWeight='400' margin='var(--margin-sm) 0 0 0' />  
      <Container width='100%' margin='2rem 0 3rem 0' padding='0 3rem' style={{overflowY: 'auto'}} >
      <Notes />
      </Container>
    </ContentContainer>
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
    { text: "Create Note", icon: <Note /> },
    { text: "Archived", icon: <Archive /> },
    { text: "Shared", icon: <Share/>  },
    { text: "Trash", icon: <Delete /> },
  ];

  return(
    <SideBarBox role='presentation'>
    <List sx={{ margin: '4rem 0 0 0'}}>
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



