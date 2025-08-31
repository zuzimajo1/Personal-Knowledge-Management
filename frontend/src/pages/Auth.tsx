import type React from 'react'
import { AuthSection, Container, MainContainer } from '../styles/Container.styled'
import { TypographyText } from '../components';
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
    <Container width='100%' height='100%' padding='20px' >
      <TypographyText variant='h5' fontWeight='600' text='Login' textAlign='center'fontSize="2rem" />
      <Container border='1px solid red' height='auto' padding='var(--padding-sm)' margin='var(--padding-md) 0 0 0'> 
        <LoginForm />
      </Container>
      <Container>
        <TypographyText variant='h6' fontSize='0.8rem' text='Forgot Password?' textAlign='right' />
      </Container>
    </Container>
  )
}

const LoginForm: React.FC = ()=>{
  return (
    <Form>
      <Input size='small' label='Email' name='email' />
      <Input size='small' label='Password' name='password'/>
    </Form>
  )
}