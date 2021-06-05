import styled from 'styled-components/native';

export const KeyboardView = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.View`
  width: 90%;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
`;

export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 30px;
  color: red;
`;

export const Input = styled.TextInput`
  border: 1px solid #000;
  margin-bottom: 30px;
  padding: 15px 20px;
  font-size: 20px;
  width: 90%;
  border-radius: 5px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #1c95ff;
  width: 90%;
  border-radius: 5px;
  padding: 15px 20px;
  align-items: center;
`;

export const TextSubmit = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`;

export const SignMessageButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const SignMessageButtonText = styled.Text`
  font-size: 16px;
  color: #268596;
`;

export const SignMessageButtonTextBold = styled.Text`
  font-size: 16px;
  color: #268596;
  font-weight: bold;
  margin-left: 5px;
`;