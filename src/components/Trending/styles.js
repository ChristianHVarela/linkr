import styled from "styled-components";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 300px;
	min-height: 400px;
	background: #171717;
	border-radius: 16px;
	margin: 0 0 0 30px;
	> h1 {
        font-family: 'Oswald', sans-serif;
		font-weight: 700;
		font-size: 27px;
		line-height: 40px;
		color: #ffffff;
        margin: 16px 0 12px 16px;
	}
`;

const HLine = styled.div`
	width: 100%;
	height: 1px;
	border-top: 1px solid #484848;
`;

const HashList = styled.ul`
	display: flex;
	flex-direction: column;
	margin: 22px 0 16px 16px;
`;

const Hashtag = styled.li`
	margin: 5px 0;
	font-weight: 700;
	font-size: 19px;
	line-height: 23px;
	letter-spacing: 0.05em;
    font-family: 'Lato', sans-serif;
	> a {
		color: #ffffff;
		text-decoration: none;
	}
`;

export { Container, HLine, HashList, Hashtag };
