import React from 'react'
import { HomeContainer, NavbarContainer } from '../styles/Home.styled'
import { TypographyText } from '../components'

export const Root = () => {
  return (
    <HomeContainer>
      <NavbarComponent/>


    </HomeContainer>
  )
}


const NavbarComponent = () =>{
  return (
    <NavbarContainer> 
      <TypographyText text='Insight Journal' textAlign='left' fontSize='1.5rem' />

    </NavbarContainer>
  )
}
