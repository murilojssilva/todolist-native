import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  height: ${RFValue(173)}px;
  background-color: ${({ theme }) => theme.colors.gray_700};
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const HeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(32)}px;
`;

export const HeaderTextTo = styled(HeaderText)`
  color: ${({ theme }) => theme.colors.blue};
`;

export const HeaderTextDo = styled(HeaderText)`
  color: ${({ theme }) => theme.colors.purple_dark};
`;
