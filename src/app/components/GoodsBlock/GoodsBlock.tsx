'use client'

import { useEffect, useState } from "react";
import { StyledGoodsContainer, StyledGoodCard, StyledGoodCardTitle, StyledGoodCardDescription, StyledGoodCardPrice, StyledGoodCardButton, StyledGoodCardInput, StyledGoodCardFooter } from "./goodsBlock.styles";
import Image from "next/image";

const imageStyle = {
  borderRadius: '16px',
  width: '280px',
  height: 'auto',
}

export const GoodsBlock = () => {
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        const getGoods = async () => {
            const fetchedGoods = await fetch('http://o-complex.com:1337/products?page=1&page_size=20').then((res) => res.json());
            setGoods(fetchedGoods.items);            
        }
        getGoods();
    }, []);


return (
    <StyledGoodsContainer>
        {Array.isArray(goods) && goods.map((item) => {
            return <StyledGoodCard key={item.id}>
                <Image style={imageStyle} width={100} height={100} src={item.image_url} alt='image'/>
                <StyledGoodCardTitle>{item.title}</StyledGoodCardTitle>
                <StyledGoodCardDescription>{item.description}</StyledGoodCardDescription>
                <StyledGoodCardPrice>цена: {item.price}₽</StyledGoodCardPrice>

                {true ? <StyledGoodCardButton>Купить</StyledGoodCardButton> :
                <StyledGoodCardFooter>
                <StyledGoodCardButton>-</StyledGoodCardButton>
                <StyledGoodCardInput type="numeric"/>
                <StyledGoodCardButton>+</StyledGoodCardButton>
                </StyledGoodCardFooter>}
                </StyledGoodCard>
        })}        
    </StyledGoodsContainer>
)
}