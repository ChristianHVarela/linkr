import styled from "styled-components";

export const HeaderMenuContainer = styled.header`
  width: 100%;
  height: 72px;
  background: #151515;
  display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  @media screen and (max-width: 895px) {
    flex-direction: column;
  }
`;

export const DesktopMenu = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px 28px;

  h1 {
    font-family: "Passion One";
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #ffffff;
    cursor: pointer;
    /* width: 438.5px; */
  }

  .profile{
    position: relative;
  }

  div.profile {
    width: 131px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-size: 30px;
    color: white;

    :hover {
      cursor: pointer;
    }

    .arrowDown {
      display: ${({ showLogout }) => (showLogout ? "none" : "block")};
    }

    .arrowUp {
      display: ${({ showLogout }) => (!showLogout ? "none" : "block")};
    }

    img {
      width: 53px;
      height: 53px;
      border-radius: 26.5px;
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 895px) {
    display: none;
  }
`;



export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 895px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px 28px;

    div {
      display: flex;
      justify-content: space-between;
    }

    h1 {
      font-family: "Passion One";
      font-weight: 700;
      font-size: 49px;
      line-height: 54px;
      letter-spacing: 0.05em;
      color: #ffffff;
      /* width: 438.5px; */
    }


    div.profile {
      width: 131px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 30px;
      color: white;

      :hover {
        cursor: pointer;
      }

      .arrowDown {
        display: ${({ showLogout }) => (showLogout ? "none" : "block")};
      }

      .arrowUp {
        display: ${({ showLogout }) => (!showLogout ? "none" : "block")};
      }

      img {
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
        margin-left: 10px;
      }
    }
  }
`;

export const MobileSearchBox = styled.div`
  display: none;

  @media screen and (max-width: 895px) {
    background-color: yellow;

    .search-box {
      position: relative;
      display: inline-block;
      background-color: yellow;
    }

    .search-box input[type="text"] {
      padding-right: 40px; /* Adjust this value as needed */
    }

    .search-box button[type="submit"] {
      position: absolute;
      top: 0;
      right: 0;
      padding: 10px;
      background-color: #f2f2f2;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .search-box button[type="submit"] i {
      color: #555;
    }
  }
`;

export const Logout = styled.div`
  display: ${({ showLogout }) => (showLogout ? "flex" : "none")};
  justify-content: flex-end;
  background-color: transparent;
  position: fixed;
  top: 70px;
  right: 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 47px;
    left: 1307px;
    top: 72px;
    background: #151515;
    border-radius: 0px 0px 0px 15px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;

    color: #ffffff;

    h3 {
      :hover {
        cursor: pointer;
      }
    }
  }
`;
