import AsyncStorage from "@react-native-async-storage/async-storage";

import { TASK_COLLECTION } from "../storageConfig";

import { tasksGetAll } from "./tasksGetAll";

export async function taskRemoveByName(textDeleted: string) {
  try {
    const storedTasks = await tasksGetAll();

    const tasks = storedTasks.filter((task) => task.text !== textDeleted);

    await AsyncStorage.setItem(TASK_COLLECTION, JSON.stringify(tasks));
  } catch (error) {
    throw error;
  }
}
