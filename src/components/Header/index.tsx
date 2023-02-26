import {
  HeaderContainer,
  HeaderContent,
  HeaderTextDo,
  HeaderTextTo,
} from "./styles";

import HeaderLogo from "../../assets/rocket.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTextTo>to</HeaderTextTo>
        <HeaderTextDo>do</HeaderTextDo>
      </HeaderContent>
    </HeaderContainer>
  );
}
