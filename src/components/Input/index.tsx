import {
  InputButton,
  InputButtonIcon,
  InputContainer,
  InputContent,
} from "./styles";

import { useState } from "react";

import tasks from "../../../tasks.json";

export function Input() {
  const [text, setText] = useState("");

  function handleAddTask(text: string) {
    tasks.push({
      checked: false,
      text: text,
    });
    setText("");
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
