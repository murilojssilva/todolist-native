import { HeaderContainer, HeaderTextDo, HeaderTextTo } from "./styles";

import HeaderLogo from "../../assets/rocket.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderLogo width={32} />

      <HeaderTextTo>to</HeaderTextTo>
      <HeaderTextDo>do</HeaderTextDo>
    </HeaderContainer>
  );
}
