import React from 'react'
import { Container, ContentContainer } from '../styles'
import { Notes, TypographyText } from '../components'

const Trash: React.FC = () => {

  return (
        <ContentContainer>
          <TypographyText text='Trash' textAlign='center' fontSize='2rem' fontWeight='600' margin='var(--margin-lg) 0 0 0' />
            <Container width='100%' margin='2rem 0 3rem 0' padding='0 2rem' style={{overflow: "hidden"}} >
            <Notes />
            </Container>
        </ContentContainer>
  )
}



export default Trash