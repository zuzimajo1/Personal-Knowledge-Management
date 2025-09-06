import React from 'react'
import { HomeContainer, NavbarContainer } from '../styles/Home.styled'
import { TypographyText } from '../components'
import { Search } from '@mui/icons-material'
import { SearchBarContainer, SearchComponent, StyledInputBase } from '../styles/SearchBar.styled'



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
      <SearchComponent>
        <SearchBarContainer>
        <Search />
        </SearchBarContainer>
          <StyledInputBase  placeholder='Search...' inputProps={{ 'aria-label': 'search' }}/>
      </SearchComponent>
    </NavbarContainer>
  )
}
