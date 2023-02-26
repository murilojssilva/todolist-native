import {
  InputButton,
  InputButtonIcon,
  InputContainer,
  InputContent,
} from "./styles";

export function Input() {
  return (
    <InputContainer>
      <InputContent placeholder="Adicione uma nova tarefa" />
      <InputButton>
        <InputButtonIcon name="plus" />
      </InputButton>
    </InputContainer>
  );
}
