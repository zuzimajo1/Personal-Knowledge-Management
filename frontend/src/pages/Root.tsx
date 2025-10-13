import React from 'react'
import { SideBar, Navbar } from '../components'
import { Container, HomeContainer } from '../styles'
import { Outlet, useLocation } from 'react-router';

export const Root: React.FC = () => {
  const location = useLocation();
  const path = location.pathname

  return (
    <HomeContainer>
      <Navbar/>
      <ContentComponent>
      <SideBar path={path}/>
      <Outlet />
      </ContentComponent>
    </HomeContainer>
  )
}

export const ContentComponent : React.FC<{children?:React.ReactNode}> = ({children})=>{
  return (
    <Container display='flex' width='100vw' height='100vh' flexDirection='row' position='relative'>
      {children}
    </Container>
  )
}





