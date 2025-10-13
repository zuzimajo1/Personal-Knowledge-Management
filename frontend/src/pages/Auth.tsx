import type React from 'react'
import { ButtonComponent, ThemeToggle, TypographyText } from '../components';
import { IconButton, Stack } from '@mui/material';
import { Facebook, GitHub, Google } from '@mui/icons-material';
import { AuthSection, Container, Form, Input, MainContainer } from '../styles';

export const Auth: React.FC = ()=> {
return (
  <MainContainer>
    <AuthSection>
      <LoginContainer/>
    </AuthSection>
  </MainContainer>
  )
}

 const LoginContainer: React.FC = ()=>{
  return (
    <Container width='calc(20vw)' height='auto' justifyContent='center' alignItems='center' backgroundColorLight='#f5f5f5' backgroundColorDark='#4d4a4aff' borderRadius='10px' border='1px solid #ccc' >
      <LoginWrapper/>
    </Container>
  )
}

const LoginWrapper : React.FC = ()=>{
  return (
    <Container width='100%' height='100%' padding='20px 30px' >
      <TypographyText variant='h5' fontWeight='600' text='Login' textAlign='center'fontSize="2rem" margin='var(--margin-lg) 0' />
        <LoginForm />
        <TypographyText variant='h6' fontWeight='400' text="Forgot Password?" textAlign='right' fontSize="0.9rem" margin='var(--margin-sm) 0 0 0' />
        <ButtonComponent width='100%' text='login' textTransform='uppercase' borderRadius='2rem' backgroundColorLight='#79AFE7' margin='var(--margin-sm) 0' />
        <LoginOptions/>
    </Container>
  )
}

const LoginForm: React.FC = ()=>{
  return (
    <Form>
      <Input variant="standard" size='small' label='Email' name='email' />
      <Input variant="standard" size='small' label='Password' name='password'/>
    </Form>
  )
}

const LoginOptions: React.FC = ()=>{

  return (
    <Container width='100%' margin='var(--margin-md) 0'>
      <TypographyText text='Or Sign Up Using'  textAlign='center' margin='var(--margin-xs) 0 var(--margin-sm) 0'/>
        <Stack direction='row' alignContent='center' justifyContent='center' spacing={1}>
          <IconButton size="small">
            <GitHub fontSize="large" htmlColor="#181717" />
          </IconButton>
          <IconButton size="small">
            <Google fontSize="large" htmlColor="#4285F4" />
          </IconButton>
          <IconButton size="small" >
            <Facebook fontSize="large" htmlColor="#1877F3"  />
          </IconButton>
        </Stack>
        <Container display='flex' flexDirection='row' justifyContent='center' width='100%' height='auto' margin='var(--margin-lg) 0 0 0'>
        <ThemeToggle/>
        </Container>
    </Container>
  )
}



