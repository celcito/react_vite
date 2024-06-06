import styled from "styled-components";

export const CustomHeader= styled.header`

    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.1);
    position: fixed;
    width: 100%;
    z-index: 100;
    background: #fff;
    top: 0px;
    height: 4rem;
    align-items: center;
    display: flex;
    justify-content: space-around;
    div{
      
        position:relative;
        right: 1.1rem;
    }
    img{
        width:100px;
    }

    div:nth-child(2) {
        cursor:pointer;
        transition: opacity 0.5s ease-in-out;
        &:hover{
            opacity:0.5;
        }
    }

` 



