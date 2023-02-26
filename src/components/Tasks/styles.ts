import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const TasksContainer = styled.ScrollView`
  flex: 1;
`;

export const TasksContent = styled.View`
  flex-direction: column;
`;

export const TasksHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 15px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray_200}; ;
`;

export const TextHeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  margin: 5px;
`;

export const TasksHeaderNumber = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  padding: 0 10px;
  color: ${({ theme }) => theme.colors.gray_100};
  background-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 50px;
`;

export const TasksHeaderCreated = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TasksHeaderCreatedText = styled(TextHeaderText)`
  color: ${({ theme }) => theme.colors.blue};
`;

export const TasksHeaderCreatedNumber = styled(TasksHeaderNumber)``;

export const TasksHeaderFinished = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TasksHeaderFinishedText = styled(TextHeaderText)`
  color: ${({ theme }) => theme.colors.purple};
`;

export const TasksHeaderFinishedNumber = styled(TasksHeaderNumber)``;
