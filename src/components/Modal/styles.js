import styled from "styled-components";

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
