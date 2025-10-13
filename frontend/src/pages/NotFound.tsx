import React from 'react'
import { ContentContainer } from '../styles'
import { TypographyText } from '../components'

const NotFound: React.FC = () => {
  return (
    <ContentContainer>
        <TypographyText text='Not Found 434' textAlign='center' fontSize='2rem' fontWeight='600' margin='var(--margin-lg) 0 0 0' />
    </ContentContainer>
  )
}

export default NotFound