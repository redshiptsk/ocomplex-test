'use client'

import { useEffect, useState } from "react"
import { StyledReviewCard, StyledReviewsContainer } from "./reviewBlock.styled"
import parse from 'html-react-parser';

export const ReviewBlock = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            const fetchedReviews = await fetch('http://o-complex.com:1337/reviews').then((res) => res.json());
            setReviews(fetchedReviews);
            
        }
        getReviews();
    }, []);

    const Review = ({text}) => {
        return parse(text);
    }

return (
    <StyledReviewsContainer>
        {Array.isArray(reviews) && reviews.map((item) => {
            return <StyledReviewCard key={item.id}><Review text={item.text}/></StyledReviewCard>
        })}        
    </StyledReviewsContainer>
)
}