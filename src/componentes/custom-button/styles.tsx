import styled from "styled-components"
export const CustonButton = styled.button`
        font-size: 1rem;
        font-family: var(--type-first);
        cursor: pointer;
        border: none;
        border-radius: 0.4rem;
        background: #d1dee5;
        color: #2a3338;
        min-width: 8rem;
        padding: 0.8rem 1.2rem;
        box-sizing: border-box;
        transition: opacity 0.5s ease-in-out;

        &:hover{
        opacity:0.5;
        }
`