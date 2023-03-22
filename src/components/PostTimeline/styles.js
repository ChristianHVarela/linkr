import styled from "styled-components";

export const ContainerPost = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 275px;
  border-radius: 16px;
  margin-bottom: 15px;
`;

export const Post = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 275px;
  border-radius: 16px;
  background: #171717;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
`;

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 17px;
    padding-right: 0px;

    svg{
        width: 22px;
        height: 22px;
        margin-bottom: 5px;
    }

    p{
        width: 100%;
        font-family: 'lato';
        color: white;
        font-size: 11px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 15px;
    }

    .tooltip{
        background-color: rgba(255,255,255,.9);
        color: #505050;
        font-family: 'lato';
        font-size: 11px;
        font-weight: 700;
    }
`
export const ImageProfile = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
  margin-top: 17px;
  margin-bottom: 20px;
`;

export const ContainerContent = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 1rem;
  @media (max-width: 710px) {
    width: 80%;
    margin-right: 3rem;
  }
`;
export const UserName = styled.p`
  height: 23px;
  font-family: "Lato";
  font-weight: 400;
  font-size: 19px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 20px;

  :hover {
    cursor: pointer;
  }
`;
export const Description = styled.p`
  width: 100%;
  min-height: 45px;
  font-family: "Lato";
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;
  margin-top: 10px;
`;
export const ContainerMetadata = styled.div`
  width: 100%;
  height: 155px;
  background: #171717;
  border-radius: 11px;
  border: 1px solid #c4c4c4;
  margin-bottom: 20px;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
`;
export const ContainerMetadataContent = styled.div`
  width: 350px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ImageMetadata = styled.img`
  width: 150px;
  height: 100%;
  border-top-right-radius: 11px;
  border-bottom-right-radius: 11px;
`;
export const TitleMetadata = styled.p`
  width: 300px;
  height: 40px;
  max-height: 40px;
  overflow: hidden;
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cecece;
`;
export const DescriptionMetadata = styled.p`
  width: 300px;
  height: 40px;
  max-height: 40px;
  overflow: hidden;
  font-family: "Lato";
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #9b9595;
`;
export const LinkMetadata = styled.p`
  width: 300px;
  height: 40px;
  max-height: 40px;
  overflow: hidden;
  font-family: "Lato";
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #cecece;
  margin-top: 0.5rem;
`;
export const PostTop = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  > div {
    display: flex;
    align-items: center;
  }
  > div > svg {
    margin-left: 10px;
    color: white;
    font-size: 15px;
    cursor: pointer;
  }
`;
export const EditInput = styled.textarea`
  width: 100%;
  height: 45px;
  font-family: "Lato";
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #4c4c4c;
  border-radius: 7px;
  border: none;
  padding: 10px;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

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

  input{
    width: 100%;
    height: 39px;
    padding: 11px 15px;
    padding-right: 45px;
    background-color: #252525;
    color: #ACACAC;
    border: none;
    border-radius: 8px;
    font-family: 'lato';
    font-size: 14px;
  }
`;
