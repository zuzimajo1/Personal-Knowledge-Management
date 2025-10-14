import React from 'react'
import { Container, ContentContainer, HomeContainer } from '../styles'
import { TypographyText } from '../components'

const NotFound: React.FC = () => {
  return (
    <HomeContainer>
      <Container display='flex' alignItems='center' justifyContent='center'>
        <TypographyText text='Not Found 434' textAlign='center' fontSize='2rem' fontWeight='600' margin='var(--margin-lg) 0 0 0' />
      </Container>
    </HomeContainer>
  )
}

export default NotFound