import AsyncStorage from "@react-native-async-storage/async-storage";
import { TASK_COLLECTION } from "../storageConfig";

interface TaskProps {
  text: string;
  checked: boolean;
}

export async function tasksGetAll() {
  try {
    const storage = await AsyncStorage.getItem(TASK_COLLECTION);

    const tasks: TaskProps[] = storage ? JSON.parse(storage) : [];

    return tasks;
  } catch (error) {
    throw error;
  }
}
