import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100vh;
    height: 100%;
    background: #333333;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 72px;
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
    margin-top: 1rem;
    @media (max-width: 710px){
        margin-left: 1.5rem;
    }
`