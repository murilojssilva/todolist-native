import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const InputContainer = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -50px;
`;

export const InputContent = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.gray_300,
}))`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.gray_500};
  height: 54px;
  width: 80%;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.gray_100};
`;

export const InputButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.blue_dark};
  height: 54px;
  border-radius: 6px;
  padding: 15px;
  width: 15%;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const InputButtonIcon = styled(Feather)`
  border-radius: 50px;
  border-color: ${({ theme }) => theme.colors.gray_100};
  color: ${({ theme }) => theme.colors.gray_100};
`;
