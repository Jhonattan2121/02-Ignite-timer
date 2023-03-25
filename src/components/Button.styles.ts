import styled, {css} from "styled-components";

export type ButtonVariant = "primary" | "secundary" | "danger" | "success";

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secundary: 'gray',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`

    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 0;
    margin: 8px;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.primary};
    /* ${props => {
        return css`
        background-color: ${buttonVariants[props.variant]}
        ` 
    }} */
`;