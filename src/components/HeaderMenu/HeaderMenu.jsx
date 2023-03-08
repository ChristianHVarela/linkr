import styled from "styled-components";
import { RxMagnifyingGlass } from 'react-icons/rx';

export default function HeaderMenu() {
  return (
    <HeaderMenuContainer>
      <div id="insideContainer">
        <h1>LINKR</h1>
        <div className="search-box">
          <input type="text" placeholder="Search for people" />
          <button type="submit">
            <RxMagnifyingGlass />
          </button>
        </div>
        <div id="profile">teste</div>
      </div>
    </HeaderMenuContainer>
  );
}

const HeaderMenuContainer = styled.header`
  width: 100%;
  height: 72px;
  background: #151515;
  display: flex;
  justify-content: center;

  div#insideContainer {
    width: 1440px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px 28px;
  }

  h1 {
    font-family: "Passion One";
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: #ffffff;
    /* width: 438.5px; */
    background-color: yellow;
  }

  input {
    width: 563px;
    height: 45px;
    left: 437px;
    top: 13px;
    background: #ffffff;
    border-radius: 8px;
    border-style: none;
    padding: 9px 14px;
    box-sizing: border-box;
  }

  div#profile {
    width: 131px;
    background-color: yellow;
  }

  .search-box {
    position: relative;
    display: inline-block;
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
`;
