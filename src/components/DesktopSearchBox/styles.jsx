import styled from "styled-components";

export const DesktopSearchBox = styled.form`
  position: relative;
  display: inline-block;

  input {
    width: 563px;
    height: 45px;
    left: 437px;
    top: 13px;
    background: #ffffff;
    border-radius: ${({ searchResults, searchQuery }) =>
    searchResults.length > 0 && searchQuery.length >= 3 ? " 8px 8px 0px 0px" : "8px"};
    border-style: none;
    padding: 9px 14px;
    box-sizing: border-box;
    color: #515151;

    ::placeholder {
      color: #c6c6c6;
    }

    :focus {
      outline: none;
    }
  }

  button[type="submit"] {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    height: 90%;
    font-size: 20px;
    color: #c6c6c6;
    margin-right: 14px;
  }
`;

export const SearchResult = styled.div`
  background-color: white;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 0px 0px 8px 8px;
  display: ${({ searchResults, searchQuery }) =>
    searchResults.length > 0 && searchQuery.length >= 3 ? "flex" : "none"};
  flex-direction: column;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 16px;

    :hover {
      cursor: pointer;
    }
  }

  img {
    width: 39px;
    height: 39px;
    border-radius: 50%;
    margin-right: 12px;
  }

  p {
    font-family: "Lato";
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #515151;
  }

  span {
    font-family: "Lato";
    font-weight: 400;
    font-size: 19px;
    line-height: 22px;
    color: #C5C5C5;
    margin-left: 7px;
  }
`;