import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const TasksContainer = styled.ScrollView`
  padding: 15px;
`;

export const TasksContent = styled.View`
  flex-direction: column;
`;

export const TasksHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 0;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray_400};
`;

export const TextHeaderText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
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

export const TasksHeaderFinished = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TasksHeaderFinishedText = styled(TextHeaderText)`
  color: ${({ theme }) => theme.colors.purple};
`;

export const TasksList = styled.View`
  padding: 20px;
`;

export const TasksListEmpty = styled.View`
  align-items: center;
  padding: 10px;
  gap: 10px;
`;

export const TasksListEmptyText = styled.View``;

export const TasksListEmptyTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray_300};
`;

export const TasksListEmptySubtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray_300};
`;

export const TasksListContent = styled.View`
  gap: 10px;
`;

export const TaskContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_500};
  flex-direction: row;

  justify-content: space-between;
  padding: 20px;

  align-items: center;
  border-color: ${({ theme }) => theme.colors.gray_400};
  border-width: 1px;
  border-radius: 6px;
`;

export const TaskButton = styled.TouchableOpacity`
  border-radius: 100px;
  border-color: ${({ theme }) => theme.colors.blue};
`;

export const TaskText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray_100};
`;

export const TaskIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_100};
`;

export const TaskButtonContainerChecked = styled.View`
  background-color: ${({ theme }) => theme.colors.purple};
  border-radius: 100px;
  padding: 2px;
`;

export const TaskButtonIconChecked = styled(Feather)`
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.gray_100};
`;

export const TaskButtonContainerUnchecked = styled.View`
  border-radius: 100px;
  padding: 9px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.blue};
`;

export const TaskTextChecked = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.gray_300};
  text-decoration: line-through;
`;
