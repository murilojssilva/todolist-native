import {
  TaskButton,
  TaskButtonContainerChecked,
  TaskButtonContainerUnchecked,
  TaskButtonIconChecked,
  TaskContainer,
  TaskIcon,
  TaskText,
  TaskTextChecked,
  TasksContainer,
  TasksContent,
  TasksHeader,
  TasksHeaderCreated,
  TasksHeaderCreatedText,
  TasksHeaderFinished,
  TasksHeaderFinishedText,
  TasksHeaderNumber,
  TasksList,
  TasksListContent,
  TasksListEmpty,
  TasksListEmptySubtitle,
  TasksListEmptyText,
  TasksListEmptyTitle,
} from "./styles";

import ClipboardImage from "../../assets/clipboard.svg";

import jsonTasks from "../../../tasks.json";
import { useState } from "react";

export function Tasks() {
  const [tasks, setTasks] = useState(jsonTasks);
  return (
    <TasksContainer>
      <TasksContent>
        <TasksHeader>
          <TasksHeaderCreated>
            <TasksHeaderCreatedText>Criadas</TasksHeaderCreatedText>
            <TasksHeaderNumber>{tasks.length}</TasksHeaderNumber>
          </TasksHeaderCreated>
          <TasksHeaderFinished>
            <TasksHeaderFinishedText>Concluídas</TasksHeaderFinishedText>
            <TasksHeaderNumber>
              {tasks.filter((task) => task.checked === true).length}
            </TasksHeaderNumber>
          </TasksHeaderFinished>
        </TasksHeader>
        <TasksList>
          {tasks ? (
            <TasksListContent>
              {tasks.map((task) => (
                <TaskContainer>
                  <TaskButton onPress={() => !task.checked}>
                    {task.checked ? (
                      <TaskButtonContainerChecked>
                        <TaskButtonIconChecked name="check" />
                      </TaskButtonContainerChecked>
                    ) : (
                      <TaskButtonContainerUnchecked />
                    )}
                  </TaskButton>
                  {task.checked ? (
                    <TaskTextChecked>{task.text}</TaskTextChecked>
                  ) : (
                    <TaskText>{task.text}</TaskText>
                  )}
                  <TaskIcon
                    name="trash-2"
                    onPress={() => tasks.splice(tasks.indexOf(task.text), 1)}
                  />
                </TaskContainer>
              ))}
            </TasksListContent>
          ) : (
            <TasksListEmpty>
              <ClipboardImage />
              <TasksListEmptyText>
                <TasksListEmptyTitle>
                  Você ainda não tem tarefas cadastradas
                </TasksListEmptyTitle>
                <TasksListEmptySubtitle>
                  Crie tarefas e organize seus items a fazer
                </TasksListEmptySubtitle>
              </TasksListEmptyText>
            </TasksListEmpty>
          )}
        </TasksList>
      </TasksContent>
    </TasksContainer>
  );
}
