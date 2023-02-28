import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASK_COLLECTION } from "../storageConfig";

import { tasksGetAll } from "./tasksGetAll";

export async function taskUpdate(text: string) {
  try {
    const storedTasks = await tasksGetAll();

    const tasks = storedTasks.map((task) =>
      task.text === text
        ? { checked: !task.checked, text: task.text }
        : task.text !== text && { checked: task.checked, text: task.text }
    );

    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(tasks));
  } catch (error) {
    throw error;
  }
}
