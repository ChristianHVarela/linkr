import styled from "styled-components";

export const ContainerPost = styled.div`
	width: 100%;
	min-height: 275px;
	border-radius: 16px;
	background: #171717;
	margin-bottom: 15px;
	display: flex;
	justify-content: space-between;
`;
export const ContainerImageProfile = styled.div`
	@media (max-width: 710px) {
		display: none;
	}
`;
export const ImageProfile = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 26.5px;
	margin-top: 17px;
	margin-left: 17px;
	object-fit: cover;
`;
export const ContainerContent = styled.div`
	width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 1rem;
`;
export const UserName = styled.p`
	width: 100%;
	height: 23px;
	font-family: "Lato";
	font-weight: 400;
	font-size: 19px;
	line-height: 22px;
	color: #ffffff;
	margin-top: 20px;
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

export const ModalDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
    max-width: 400px;
    margin: 0 80px;
    @media (max-width: 768px) {
        margin: 0 20px;
    }
`;

export const ModalText = styled.p`
	font-family: "Lato", sans-serif;
	font-weight: 700;
	font-size: 34px;
	line-height: 41px;
	color: #ffffff;
	text-align: center;
	margin-bottom: 40px;
    @media (max-width: 768px) {
       font-size: 24px;
    }
`;

export const ModalButton = styled.button`
	width: 150px;
	height: 40px;
	border-radius: 5px;
	border: none;
	margin-right: 20px;
	font-family: "Lato";
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 22px;
    cursor: pointer;
	&.confirm {
		background: #1877f2;
		color: white;
	}
	&.cancel {
		color: #1877f2;
		background: white;
	}
    @media (max-width: 768px) {
        height: 40px;
        width: 100px;
        margin-right: 14px;
        font-size: 16px;
    }
`;
