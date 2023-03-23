import styled, {keyframes} from "styled-components";
import { BiRefresh } from "react-icons/bi";

const ReloadButton = styled.button`
    background: #1877F2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    width: 100%;
    height: 60px;
    border: none;
    color: #FFF;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    &.loading {
        cursor: default;
        filter: brightness(0.8);
    }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

const Refresh = styled(BiRefresh)`
    margin-left: 15px;
    font-size: 20px;
    color: #FFF;
    &.loading {
        animation: ${rotate} 1s linear infinite;
    }
`;

export { ReloadButton, Refresh };