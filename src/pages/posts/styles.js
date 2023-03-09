import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background: #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Title = styled.p`
    font-family: "Oswald";
    font-weight: 700;
    font-size: 43px;
    line-height: 60px;
    color: #FFFFFF;
    width: 610px;
    text-align: left;
    margin-bottom: 40px;
    @media (max-width: 710px){
        width: 100vw;
        margin-left: 1.5rem;
    }
`