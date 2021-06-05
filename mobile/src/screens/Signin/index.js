import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
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

import Api from '../../Api';

export default () => {
  const navigation = useNavigation();

  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const handleSignClick = async () => {
    if(emailField != '' && passwordField != '') {
      alert("Login efetuado com sucesso");
      
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
