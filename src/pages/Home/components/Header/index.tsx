import { CodepenLogo } from "phosphor-react";
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <CodepenLogo size={50} weight="fill" color="rgb(110, 7, 243)"/>

        <HeaderButtonContainer>
          Leonardo Banze
          <HeaderButton>Say Hello</HeaderButton>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
}
