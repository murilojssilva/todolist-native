import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Tasks } from "../../components/Tasks";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Input />
      <Tasks />
    </HomeContainer>
  );
}
