import styled from "styled-components";

export const StyledHeader = styled.div`
max-width: 1442px;
width: 100%;
height: 132px;
margin-top: 55px;
padding: 16px 8px;

border-radius: 16px;

background-color: #777777;
font-weight: 400;
font-size: 96px;
line-height: 100%;
letter-spacing: 0%;
color: #fff;
text-align:center;

@media screen and (max-width: 860px) {
    height: 108px;
    margin-top: 13px;
    font-weight: 400;
    font-size: 40px;
    line-height: 100%;
    letter-spacing: 0%;
    text-align: center;
    vertical-align:center;

}
`