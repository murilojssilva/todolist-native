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

import { useLayoutEffect, useState } from "react";
import { tasksGetAll } from "../../storage/task/tasksGetAll";
import { Alert } from "react-native";
import { taskRemoveByName } from "../../storage/task/taskRemoveByName";
import { taskUpdate } from "../../storage/task/taskUpdate";
import { Loading } from "../Loading";

export function Tasks() {
  const [tasks, setTasks] = useState<{ checked: boolean; text: string }[]>([]);

  async function taskRemove(text: string) {
    try {
      await taskRemoveByName(text);
    } catch (error) {
      console.log(error);
      Alert.alert("Remover tarefa", "Não foi possíver remover a tarefa");
    }
  }

  async function handleTaskRemove(text: string) {
    Alert.alert("Remover", "Deseja remover a tarefa?", [
      { text: "Não", style: "cancel" },
      { text: "Sim", onPress: () => taskRemove(text) },
    ]);
  }

  async function checkTask(text: string) {
    try {
      await taskUpdate(text);
    } catch (error) {
      console.log(error);
      Alert.alert("Remover tarefa", "Não foi possíver remover a tarefa");
    }
  }

  useLayoutEffect(() => {
    async function fetchTasks() {
      try {
        const data = await tasksGetAll();
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTasks();
  }, [tasks]);

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
        {tasks ? (
          <TasksList>
            {tasks.length > 0 ? (
              <TasksListContent>
                {tasks.map((task, index) => (
                  <TaskContainer key={index}>
                    {
                      <TaskButton onPress={() => checkTask(task.text)}>
                        {task.checked ? (
                          <TaskButtonContainerChecked>
                            <TaskButtonIconChecked name="check" />
                          </TaskButtonContainerChecked>
                        ) : (
                          <TaskButtonContainerUnchecked />
                        )}
                      </TaskButton>
                    }
                    {task.checked ? (
                      <TaskTextChecked>{task.text}</TaskTextChecked>
                    ) : (
                      <TaskText>{task.text}</TaskText>
                    )}
                    <TaskIcon
                      name="trash-2"
                      onPress={() => handleTaskRemove(task.text)}
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
        ) : (
          <Loading />
        )}
      </TasksContent>
    </TasksContainer>
  );
}
