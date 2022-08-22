import { ImgContainer, IntoInfo, UserInfoContainer } from "./style";
import user from '../../../../assets/leo.png'

export function UserInfo (){

    return(
        <UserInfoContainer className="container">

            <IntoInfo>Full Stack Developer</IntoInfo>
            <p>I design and code beautifully simple things, and I love what I do.</p>
            <ImgContainer  src={user}/>

        </UserInfoContainer>
    )
}