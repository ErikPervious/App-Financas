import styled from 'styled-components/native';

export const Background = styled.View`
  flex: 1;
  background: #131313;
`;
export const Container = styled.View`
  margin-left: 15px;
  margin-bottom: 25px;
`;
export const Name = styled.Text`
  font-size: 19px;
  color: #FFF;
  font-style: italic;
`;
export const Balance = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  color: #FFF;
  font-weight: bold;
`;
export const Area = styled.View`
  flex-direction: row;
  margin-left: 15px;
  align-items: baseline;
`;
export const Title = styled.Text`
  margin-left: 5px;
  color: #00b94a;
  margin-bottom: 10px;
`;
export const List = styled.FlatList.attrs({
  marginHorizontal: 15
})`
  padding-top: 15px;
  background: #FFF;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 8px;

`;