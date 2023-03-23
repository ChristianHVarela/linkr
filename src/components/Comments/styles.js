import styled from "styled-components";

export const ContainerComments = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #1E1E1E;
  border-radius: 16px;
  margin-top: -25px;
  padding: 25px;
`;

export const Comment = styled.div`

`;

export const MyComment = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;

  img{
    width: 39px;
    height: 39px;
    border-radius: 26.5px;
    margin-right: 14px;
  }

  form{
    width: 100%;
    height: 39px;
    background-color: #252525;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type="text"] {
    width: 100%;
    height: 39px;
    padding: 11px 15px;
    background-color: transparent;
    color: #ACACAC;
    border: none;
    border-radius: 8px;
    font-family: 'lato';
    font-size: 14px;

    :focus{
      outline: none;
    }
  }
`;

export const SendButton = styled.button`
    width: 45px;
    height: 39px;
    padding: 11px 15px;
    cursor: pointer;
    border-radius: 8px;
    background-color: transparent;
    border: none;

    svg{
        width: 100%;
        height: 100%;
        color: #F3F3F3;
    }

    :hover{
        background-color: #3d3d3d;
    }
`;
