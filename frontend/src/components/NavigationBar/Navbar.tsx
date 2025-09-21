import React from 'react'
import { NavbarContainer } from '../../styles/Home.styled'
import { TypographyText } from '../Text/TypographyText'
import { SearchBarContainer, SearchComponent, StyledInputBase } from '../../styles/SearchBar.styled'
import { Search } from '@mui/icons-material'
import { Container } from '../../styles/Container.styled'

export const Navbar = () => {
  return (
    <NavbarContainer> 
        <Container width='100%' display='flex' flexDirection='row' >
          <TypographyText text='Insight Journal' textAlign='left' fontSize='1.5rem' />
          <Container margin='0 0 0 6rem'>
          <SearchComponent>
            <SearchBarContainer>
            <Search />
            </SearchBarContainer>
              <StyledInputBase  placeholder='Search...' inputProps={{ 'aria-label': 'search' }}/>
          </SearchComponent>
          </Container>
        </Container>
    </NavbarContainer>
  )
}
