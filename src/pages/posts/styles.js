import styled from 'styled-components'

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    height: 100%;
    background: #333333;
    margin-top: 72px;
    display: flex;
    justify-content: center;
`
export const ContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const ContainerTrending = styled.div`
    margin-left: 2rem;
	margin-top: 7rem;
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
        width: 100vw;
        margin-left: 1.5rem;
    }
`