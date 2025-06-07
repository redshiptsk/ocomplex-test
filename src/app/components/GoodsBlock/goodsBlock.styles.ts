import styled from "styled-components";

export const StyledGoodsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
gap: 25px;
max-width: 983px;
width: 100%;
margin-top: 47px;
border-radius: 16px;
@media screen and (max-width: 720px) {
    
    margin-top: 97px;
    gap: 16px
}
`;

export const StyledGoodCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
width: 301px;
padding: 10px;

border-radius: 16px;

background-color: #777777;
font-weight: 400;
font-size: 24px;
line-height: 100%;
letter-spacing: 0%;

color: #000;
@media screen and (max-width: 720px) {
    width: 100%;
}
`
export const StyledGoodCardTitle = styled.h1`
text-align:center;
`

export const StyledGoodCardDescription = styled.p`

`

export const StyledGoodCardPrice = styled.span`
font-weight: 400;
font-size: 36px;
line-height: 100%;
letter-spacing: 0%;

text-align:center;
`

export const StyledGoodCardFooter = styled.div`
display: flex;
flex-direction: row;
gap: 6px;
`

export const StyledGoodCardButton = styled.button`
width: 100%;
`
export const StyledGoodCardInput = styled.input`
width: 128px;

`