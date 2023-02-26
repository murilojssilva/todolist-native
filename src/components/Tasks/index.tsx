import {
  TasksContainer,
  TasksContent,
  TasksHeader,
  TasksHeaderCreated,
  TasksHeaderCreatedNumber,
  TasksHeaderCreatedText,
  TasksHeaderFinished,
  TasksHeaderFinishedNumber,
  TasksHeaderFinishedText,
} from "./styles";

export function Tasks() {
  return (
    <TasksContainer>
      <TasksContent>
        <TasksHeader>
          <TasksHeaderCreated>
            <TasksHeaderCreatedText>Criadas</TasksHeaderCreatedText>
            <TasksHeaderCreatedNumber>0</TasksHeaderCreatedNumber>
          </TasksHeaderCreated>
          <TasksHeaderFinished>
            <TasksHeaderFinishedText>Concluídas</TasksHeaderFinishedText>
            <TasksHeaderFinishedNumber>0</TasksHeaderFinishedNumber>
          </TasksHeaderFinished>
        </TasksHeader>
      </TasksContent>
    </TasksContainer>
  );
}
