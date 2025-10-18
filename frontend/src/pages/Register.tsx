import React from 'react'
import { AuthSection, Container, Form, Input, MainContainer } from '../styles'
import { ButtonComponent, ThemeToggle, TypographyText } from '../components'

const Register: React.FC = () => {
  return (
  <MainContainer>
    <AuthSection>
      <RegisterContainer/>
    </AuthSection>
  </MainContainer>
  )
}


const RegisterContainer: React.FC = ()=>{
  return (
    <Container width='calc(20vw)' height='auto' justifyContent='center' alignItems='center' backgroundColorLight='#f5f5f5' backgroundColorDark='#4d4a4aff' borderRadius='10px' border='1px solid #ccc' >
      <RegisterWrapper/>
    </Container>
  )
}

const RegisterWrapper : React.FC = ()=>{
  return (
    <Container width='100%' height='100%' padding='20px 30px' >
      <TypographyText variant='h5' fontWeight='600' text='Register' textAlign='center'fontSize="2rem" margin='var(--margin-lg) 0' />
        <RegisterForm/>
        <ButtonComponent width='100%' text='register' textTransform='uppercase' borderRadius='2rem' backgroundColorLight='#79AFE7' margin='var(--margin-sm) 0' />
        <Container display='flex' flexDirection='row' justifyContent='center' width='100%' height='auto' margin='var(--margin-lg) 0 0 0'>
        <ThemeToggle/>
      </Container>
    </Container>
  )
}

const RegisterForm: React.FC = ()=> {
  const [showPassword, setshowPassword] = React.useState(false);
  const handleshowPasswordChange = ()=>{
    setshowPassword(!showPassword);
  }


  return (
    <Form>
      <Input autoComplete='false' variant="standard" size='small' label='Firstname' name='firstname' />
      <Input variant="standard" size='small' label='Lastname' name='lastname'/>
      <Input variant="standard" size='small' label='Email' name='email' />
      <Input type={showPassword ? 'text' : 'password'} variant="standard" size='small' label='Password' name='password'/>
      <Input type={showPassword ? 'text' : 'password'} variant="standard" size='small' label='Confirm Password' name='confirmpassword'/>
      <Container display='flex' width='100%' height='auto'>
      <input onClick={handleshowPasswordChange} type='checkbox' name='showpassword' style={{marginRight: '0.5rem'}} />
      <TypographyText textAlign='center' variant="subtitle2"  text='Show password' />
      </Container>
    </Form>
  )
}

export default Register