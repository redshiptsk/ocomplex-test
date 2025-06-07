import styled from "styled-components"

export const StyledCartContainer = styled.div`
display: flex;
flex-direction: column;
max-width: 708px;
min-height: 100px;
padding: 11px;
border-radius: 16px;
margin-top: 40px;

background-color: #777;

@media screen and (max-width: 720px) {    
margin-top: 64px;
}
`

export const StyledHeader = styled.h1`
font-weight: 400;
font-size: 36px;
line-height: 100%;
letter-spacing: 0%;
text-overflow: clip;
`
export const StyledItems = styled.div`
display: flex;
flex-direction: row;
max-width: 344px;
min-height: 100px;
padding: 10px;
`
export const StyledItemText = styled.span`
font-weight: 400;
font-size: 24px;
line-height: 100%;
letter-spacing: 0%;
`
export const StyledFooterBlock = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 16px;
`

export const StyledInput = styled.input`
width: 400px;
padding-left: 16px;

@media screen and (max-width:720px) {
    max-width: 700px;
    width:100%
}
`

export const StyledButton = styled.button`
max-width: 400px;
min-width: 268px;

@media screen and (max-width:720px) {
    max-width: 700px;
    width:100%
}
`