import styled from "styled-components";

export const HeaderContainer = styled.header`

width: 100%;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


`


export const HeaderButtonContainer = styled.div`

display: flex;
     align-items: center;
     gap: 0.75rem;

`


export const HeaderButton = styled.button`
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
border: 2px solid blue;
min-width: 2.6rem;
height: 2.6rem;
padding: 0 0.6rem;
position: relative;
background-color: #fff;

`