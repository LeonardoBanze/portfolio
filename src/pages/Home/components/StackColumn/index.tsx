import { IntoCard } from "../IntoCard";
import { IntoCardContainer } from "../IntoCard/style";
import {DisplayColumn, StackContainer}  from "./style";



export function Stack (){
    return(

        <StackContainer className="container">

        <DisplayColumn>
            <IntoCard/>
            <IntoCard/>
            <IntoCard/>
            
        </DisplayColumn>
            
            

        </StackContainer>
    )
}