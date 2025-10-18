import React from 'react'
import { Container, ContentContainer } from '../styles'
import { Notes, TypographyText } from '../components'


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

export default Home