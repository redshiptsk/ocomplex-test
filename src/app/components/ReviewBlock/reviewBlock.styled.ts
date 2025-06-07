import styled from "styled-components";

export const StyledReviewsContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
gap: 34px;
max-width: 983px;
width: 100%;
margin-top: 105px;
border-radius: 16px;
@media screen and (max-width: 720px) {
    
    margin-top: 97px;
    gap: 16px
}
`;

export const StyledReviewCard = styled.div`
width: 450px;
padding: 16px 8px;

border-radius: 16px;

background-color: #777777;
font-weight: 400;
font-size: 24px;
line-height: 100%;
letter-spacing: 0%;

color: #000;
@media screen and (max-width: 720px) {
    width: 100%;
    text-overflow: ellipsis;
}

`