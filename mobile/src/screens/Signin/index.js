import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { 
  Container, 
  KeyboardView, 
  Title,
  Input,
  ButtonSubmit,
  TextSubmit,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold

} from './styles';

export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {

    const BASE_URL = '';
    if(emailField != '' && passwordField != '') {
      axios.post(`${BASE_URL}/login`, {
        email: emailField,
        password: passwordField
      })
      .then(function (response) {
        alert("Login efetuado com sucesso");
      })
      .catch(function (error) {
        console.log(error);
        if(error.response.status === 409) {
          alert("Email não existe");
          console.log("Email não existe");
        }
      });
    } else {
      alert("Preencha os campos")
    }
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignUp'}]
    });
  }

  return(
    <KeyboardView>
      <Container>
        <Title>Login</Title>
        <Input 
          placeholder="Email" 
          value={emailField}
          onChangeText={t=>setEmailField(t)}
        />
        <Input 
          placeholder="Senha" 
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}  
        />
        <ButtonSubmit onPress={handleSignClick}>
          <TextSubmit>Entrar</TextSubmit>
        </ButtonSubmit>
        <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
      </Container>
    </KeyboardView>
  )
}
