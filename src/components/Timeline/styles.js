import styled from "styled-components";

export const Container = styled.div`
    width: 610px;
    display: flex;
    flex-direction: column;
    background: transparent;
    align-items: center;
    margin-top: 30px;
    @media (max-width: 710px){
        width: 100%;
    }
`

export const MessageEmpty = styled.p`
    width: 100%;
    text-align: center;
    color: #FFFFFF;
    font-family: "Lato";
    font-size: 30px;
    font-weight: 400;
`