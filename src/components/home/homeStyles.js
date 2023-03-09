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
    @media (max-width: 710px){
        flex-direction: column;
    }
`;

export const LogoContainer = styled.div`
    width: 60vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20% 10%;
    padding-top: 15%;
    background-color: #151515;
    color: white;

    h1{
        font-family: 'Passion One';
        font-size: 106px;
        font-weight: 700;
    }
    h2{
        display: flex;
        font-family: "Oswald";
        max-width: 442px;
        width: 100%;
        font-size: 43px;
    }

    @media (max-width: 710px){
        width: 100%;
        height: min-content;
        padding-top: 5px;
        padding-bottom: 15px;

        h1{
            font-size: 76px;
        }
        h2{
            font-size: 23px;
        }
    }
`;


export const FormContainer = styled.form`
    min-width: 350px;
    width: 40vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20% 55px;
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
    @media (max-width: 710px){
        width: 100%;
        min-width: auto;
        justify-content: start;
        padding: 40px 22px;
        button, input{
            height: 55px;
            font-size: 22px;
        }
        a{
            font-size: 17px;
        }
    }
`;