import styled from 'styled-components';

export const Background = styled.View`
  flex: 1;
  background-color: #131313;
`;
export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Logo = styled.Image`
  margin-bottom: 15px;
`;
export const AreaInput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
`;
export const Input = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(255, 255, 255, 0.20)'
})`
  background-color: rgba(0, 0, 0, 0.20);
  flex: 1;
  font-size: 17px;
  color: #fff;
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 7px;
`;
export const ButtonSecurePassword = styled.TouchableOpacity`
  width: 50px;
  margin-bottom: 15px;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const SubmitButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: #00b94a;
  width: 90%;
  height: 45px;
  border-radius: 7px;
  margin-top: 10px;
`;
export const SubmitText = styled.Text`
  font-size: 20px;
  color: #131313;
`;
export const Link = styled.TouchableOpacity`
  margin-top: 5px;
  margin-bottom: 9px;
`;
export const LinkText = styled.Text`
  color: #fff;
`;