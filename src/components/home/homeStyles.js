import styled from "styled-components";

export const HomeStyle = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    *{
        box-sizing: border-box;
    }
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 300px 144px;
    background-color: #151515;
    color: white;

    h1{
        font-family: 'Passion One';
        font-size: 106px;
        font-weight: 700;
    }
    h2{
        font-family: "Oswald";
        width: 442px;
        font-size: 43px;
    }
`;


export const FormContainer = styled.form`
    min-width: 535px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 55px;
    background-color: #333333;

    input{
        font-family: "Oswald";
        width: 100%;
        height: 65px;
        border: none;
        border-radius: 6px;
        background-color: white;
        font-weight: 700;
        font-size: 27px;
        padding: 12px 17px;
        margin-bottom: 13px;

        ::placeholder{
            color: #9F9F9F;
        }
    }
    button{
        font-family: "Oswald";
        width: 100%;
        height: 65px;
        border: none;
        border-radius: 6px;
        background-color: #1877F2;
        font-size: 27px;
        color: white;
        margin-bottom: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    a{
        color: white;
        font-family: 'Lato';
        font-size: 20px;
    }
`;