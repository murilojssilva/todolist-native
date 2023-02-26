import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  width: 100%;
  height: ${RFValue(173)}px;
  background-color: ${({ theme }) => theme.colors.gray_700};
  justify-content: center;
`;

export const HeaderContent = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const HeaderTextTo = styled.Text`
  color: ${({ theme }) => theme.colors.blue};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
`;

export const HeaderTextDo = styled.Text`
  color: ${({ theme }) => theme.colors.purple_dark};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(24)}px;
`;
