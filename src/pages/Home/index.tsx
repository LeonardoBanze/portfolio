import { CardInfo } from "./components/CardInfo";
import { Img } from "./components/Img";
import { Stack } from "./components/StackColumn";
import { UserInfo } from "./components/Userinfo";
import { UserInfoContainer } from "./components/Userinfo/style";
import { HomeContainer } from "./style";

export function Homepage() {
  return (
    <HomeContainer>
      <UserInfo />
      <Img/>
      <CardInfo/>
<Stack/>
    </HomeContainer>
  );
}
