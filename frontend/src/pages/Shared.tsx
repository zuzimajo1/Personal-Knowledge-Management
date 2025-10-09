import React from 'react'
import { Container, ContentContainer, HomeContainer } from '../styles'
import { Navbar, Notes, SideBar, TypographyText } from '../components'
import { ContentComponent } from './Root'

const Shared = () => {
  return (
    <HomeContainer>
      <Navbar/>
        <ContentComponent>
          <SideBar/>
          <SharedContent/>
      </ContentComponent>
    </HomeContainer>
  )
}


const SharedContent: React.FC = ()=> {
  return (
    <ContentContainer>
      <TypographyText text='Shared To You' textAlign='center' fontSize='2rem' fontWeight='600' margin='var(--margin-lg) 0 0 0' />
        <Container width='100%' margin='2rem 0 3rem 0' padding='0 2rem' style={{overflow: "hidden"}} >
          <Notes />
        </Container>
    </ContentContainer>
  )
}

export default Shared