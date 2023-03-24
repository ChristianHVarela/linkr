import { useContext, useEffect, useState } from "react";
import useInterval from "use-interval";
import ReloadPosts from "../../components/NewPosts";
import PostCreation from "../../components/PostCreation";
import Timeline from "../../components/Timeline";
import Trending from "../../components/Trending";
import api from "../../config/api";
import { AuthContext } from "../../contexts/authContext";
import * as S from "./styles";

const Posts = () => {
	const { image, config, update } = useContext(AuthContext);
	const [posts, setPosts] = useState(null);
	const [newPosts, setNewPosts] = useState(null);
	const newCount = posts
		? newPosts.map((e) => e.id).indexOf(posts[0].id)
		: null;

	useEffect(() => {
		getPosts();
	}, [update]);

	useInterval(async () => {
		try {
			const { data } = await api.get("/timeline", config);
			setNewPosts(data);
		} catch (e) {
			console.log(`Couldn't fetch new posts: ${e}`);
		}
	}, 15000);

	const getPosts = async () => {
		try {
			const { data } = await api.get("/timeline", config);
			setPosts(data);
			setNewPosts(data);
		} catch (error) {
			alert(
				"An error occured while trying to fetch the posts, please refresh the page"
			);
		}
	};

	return (
		<S.Container>
			<S.ContainerCenter>
				<S.Title>timeline</S.Title>
				<PostCreation imageUrl={image} headers={config} />
				{newCount > 0 && (
					<ReloadPosts
						postsCount={newCount}
						setPosts={setPosts}
						newPosts={newPosts}
					/>
				)}
				<Timeline posts={posts} />
			</S.ContainerCenter>
			<S.ContainerTrending>
				<Trending />
			</S.ContainerTrending>
		</S.Container>
	);
};

export default Posts;
