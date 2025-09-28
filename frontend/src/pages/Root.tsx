import React from 'react'
import { SideBar, TypographyText, Notes, Navbar } from '../components'
import { Container, ContentContainer, HomeContainer } from '../styles'


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
      <Container width='100%' margin='2rem 0 3rem 0' padding='0 2rem' style={{overflow: "hidden"}} >
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





