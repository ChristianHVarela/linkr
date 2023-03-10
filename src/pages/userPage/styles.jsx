import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  background: #333333;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 132px;
`;
export const Title = styled.div`
  width: 610px;
  display: flex;

  h2 {
    font-family: "Oswald";
    font-weight: 700;
    font-size: 43px;
    line-height: 60px;
    color: #ffffff;
    width: 610px;
    text-align: left;
    margin-bottom: 18px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
    margin-right: 18px;
  }

  @media (max-width: 710px) {
    width: 100vw;
    margin-left: 1.5rem;
  }
`;
