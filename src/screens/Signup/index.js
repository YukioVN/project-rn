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
    /*
    Colocar o IP (IPV4) do dispositivo na BASE_URL
    Exemplo: http://192.168.X.X:3000
    :3000 vem do server localhost:3000
    */
    const BASE_URL = '';
    if(emailField != '' && passwordField != '') {
      axios.post(`${BASE_URL}/signup`, {
        email: emailField,
        password: passwordField
      })
      .then(function (response) {
        alert("Cadastro efetuado com sucesso");
      })
      .catch(function (error) {
        console.log(error);
        if(error.response.status === 409) {
          alert("Usuário existente");
          console.log("Usuário existente");
        }
      });
    } else {
      alert("Preencha os campos")
    }
  }

  const handleMessageButtonClick = () => {
    navigation.reset({
      routes: [{name: 'SignIn'}]
    });
  }

  return(
    <KeyboardView>
      <Container>
        <Title>Cadastro</Title>
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
          <TextSubmit>Cadastrar</TextSubmit>
        </ButtonSubmit>
        <SignMessageButton onPress={handleMessageButtonClick}>
        <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
      </SignMessageButton>
      </Container>
    </KeyboardView>
  )
}
