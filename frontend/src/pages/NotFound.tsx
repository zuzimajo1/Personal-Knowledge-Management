import React from 'react'
import { Container, ContentContainer, HomeContainer } from '../styles'
import { ButtonComponent, TypographyText } from '../components'
import { Link } from 'react-router'

const NotFound: React.FC = () => {
  return (
    <HomeContainer >
      <Container style={{ flex:1, display:'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center'}} >
        <TypographyText text='Sorry! We could not find that page' textAlign='center' fontSize='3rem' fontWeight='600' margin='var(--margin-lg) 0 0 0' />
      <Link to="/">
       <ButtonComponent text='Back to Home' width='auto' height='50px' />
      </Link>
      </Container>
    </HomeContainer>
  )
}

export default NotFound