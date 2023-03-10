import { Container, HLine, HashList, Hashtag } from "./styles";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import api from "../../config/api";
import { AuthContext } from "../../contexts/authContext";

function Trending() {
	const [trending, setTrending] = useState([]);
	const { config, update } = useContext(AuthContext);
	async function getTrending() {
		try {
			const { data } = await api.get("/trending", config);
			setTrending(data);
			console.log(data);
		} catch (err) {
			alert("Erro ao carregar os trending.");
		}
	}
	useEffect(() => {
		getTrending();
	},[update]);

	return (
		<Container data-test="trending">
			<h1>trending</h1>
			<HLine />
			<HashList>
				{trending.map((item) => (
					<Hashtag data-test="hashtag" key={item.id}>
						<Link to={`/hashtag/${item.name}`}>
							#{item.name}
						</Link>
					</Hashtag>
				))}
			</HashList>
		</Container>
	);
}

export default Trending;
