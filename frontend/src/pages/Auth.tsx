import type React from 'react'
import { AuthSection, Container, MainContainer } from '../styles/Container.styled'
import { ButtonComponent, TypographyText } from '../components';
import { Form, Input } from '../styles/Auth.styled';



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
    <Container width='calc(28vw)' height='60vh' justifyContent='center' alignItems='center' backgroundColorLight='#f5f5f5' backgroundColorDark='#333' borderRadius='10px' border='1px solid #ccc' >
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
      <TypographyText text='Or Sign Up Using'  textAlign='center'/>

    </Container>
  )
}
