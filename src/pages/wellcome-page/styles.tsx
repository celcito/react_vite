import styled from "styled-components";

export const DivBackground = styled.div`
    display: block;
    content: '';
    background: url(/src/assets/6da767c5-6cc8-42d0-a8e3-fefbfe7fe238.jpeg) no-repeat center center;
    background-size: cover;
    @media (max-width: 40rem) {
        display: none;
    }

`

export const DivOnlyText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4em;
}


`