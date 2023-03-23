import styled from "styled-components";

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
    align-items: center;
    flex-direction: column;
`
export const Title = styled.div`
  width: 610px;
  display: flex;
  margin-top: 40px;

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
`
export const ContainerTrending = styled.div`
  margin-left: 2rem;
	margin-top: 4rem;
`
export const ContainerButtonFollowUnfollow = styled.div`
  height: 31px;
  display: flex;
  justify-content: end;
  margin-bottom: 3.5rem;
`
export const ButtonFollow = styled.button`
  width: 110px;
  background-color: #1877f2;
  text-align: center;
  color: #FFFFFF;
  border: hidden;
  border-radius: 5px;
  font-family: "Lato";
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  &:hover {
      filter: brightness(0.8);
  }
  &:active {
      filter: brightness(1.2);
  }
`
export const ButtonUnfollow = styled.button`
  width: 110px;
  background-color: #FFFFFF;
  text-align: center;
  color: #1877f2;
  border: hidden;
  border-radius: 5px;
  font-family: "Lato";
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  cursor: pointer;
  &:hover {
      filter: brightness(0.8);
  }
  &:active {
      filter: brightness(1.2);
  }
`
