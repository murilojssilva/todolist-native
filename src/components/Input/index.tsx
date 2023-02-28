import {
  InputButton,
  InputButtonIcon,
  InputContainer,
  InputContent,
} from "./styles";

import { useState } from "react";

import { taskCreate } from "../../storage/task/taskCreate";

export function Input() {
  const [text, setText] = useState("");

  async function handleAddTask(text: string) {
    try {
      await taskCreate({ text: text, checked: false });
      setText("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <InputContainer>
      <InputContent
        onChangeText={setText}
        placeholder="Adicione uma nova tarefa"
        value={text}
      />
      <InputButton onPress={() => handleAddTask(text)}>
        <InputButtonIcon name="plus-circle" />
      </InputButton>
    </InputContainer>
  );
}
