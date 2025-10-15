import React from 'react'
import { Container, ContentContainer, HomeContainer } from '../styles'
import { TypographyText } from '../components'

const NotFound: React.FC = () => {
  return (
    <HomeContainer>
      <Container height="100vh" display='flex' flexDirection='column'  alignItems='center' justifyContent='center'>
        <TypographyText text='Sorry! We could not find that page' textAlign='center' fontSize='3rem' fontWeight='600' margin='var(--margin-lg) 0 0 0' />
      </Container>
    </HomeContainer>
  )
}

export default NotFound