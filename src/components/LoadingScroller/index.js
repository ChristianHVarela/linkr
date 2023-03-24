import { TailSpin } from "react-loader-spinner";
import { Container } from "./styles";

function LoadingScroller() {
	return (
		<Container>
			<TailSpin
				height="40"
				width="40"
				color="#6D6D6D"
				ariaLabel="tail-spin-loading"
				radius="0"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
			<p>Loading more posts...</p>
		</Container>
	);
}

export default LoadingScroller;
