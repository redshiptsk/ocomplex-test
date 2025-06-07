'use client'
import { StyledButton, StyledCartContainer, StyledFooterBlock, StyledHeader,  StyledInput,  StyledItems, StyledItemText } from "./cartBlock.styles"
import { useRef, useState } from "react";


export const CartBlock = () => {
    const [phone, setPhone] = useState('')

    const handleChange = (event) => {
        const input = event.target.value.replace(/\D/g, '');
        let formattedInputValue = '+7';

        if (input.length > 1) {
            formattedInputValue += ' (' + input.substring(1, 4);
        }
        if (input.length > 4) {
            formattedInputValue += ') ' + input.substring(4, 7);
        }
        if (input.length > 7) {
            formattedInputValue += '-' + input.substring(7, 9);
        }
        if (input.length > 9) {
            formattedInputValue += '-' + input.substring(9, 11);
        }

        setPhone(formattedInputValue);
    };

    return (
        <StyledCartContainer>
            <StyledHeader>Добавленные товары</StyledHeader>
            <StyledItems>
                <StyledItemText></StyledItemText>
            </StyledItems>
            <StyledFooterBlock>
                <StyledInput placeholder="+7 (__) ___ __-__" value={phone} onChange={handleChange} />
                <StyledButton>Заказать</StyledButton>
            </StyledFooterBlock>
        </StyledCartContainer>
    )
}
