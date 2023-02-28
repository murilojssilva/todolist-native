import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "../storageConfig";
import { tasksGetAll } from "./tasksGetAll";
import { TaskStorageDTO } from "./taskStorageDTO";

export async function taskCreate(task: TaskStorageDTO) {
  try {
    const storedTasks = await tasksGetAll();

    const storage = JSON.stringify([...storedTasks, task]);
    await AsyncStorage.setItem(TASK_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
