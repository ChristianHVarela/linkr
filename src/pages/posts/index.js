import { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import useInterval from "use-interval";
import LoadingScroller from "../../components/LoadingScroller";
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
	const [page, setPage] = useState(2);
	const [hasMoreItems, setHasMoreItems] = useState(false);
	const [countFollowers, setCountFollowers] = useState(null)
	const newCount = posts && posts.length > 0
		? newPosts.map((e) => e.id).indexOf(posts[0].id)
		: null;

	useEffect(() => {
		getPosts();
	}, [update]);

	useInterval(async () => {
		try {
			const { data } = await api.get("/timeline", config);
			const dataPosts = data.body
			setCountFollowers(Number(data.countFollowers))
			setNewPosts(dataPosts);
		} catch (e) {
			console.log(`Couldn't fetch new posts: ${e}`);
		}
	}, 15000);

	const getPosts = async () => {
		try {
			const { data } = await api.get("/timeline", config);
			const dataPosts = data.body
			setCountFollowers(Number(data.countFollowers ? data.countFollowers : 0))
			setPosts(dataPosts ? dataPosts : []);
			setNewPosts(dataPosts ? dataPosts : []);
			setHasMoreItems(data.length > 0 ? dataPosts.length === 10 : false);
		} catch (error) {
			alert(
				"An error occured while trying to fetch the posts, please refresh the page"
			);
		}
	};

	const loadMore = async () => {
		try {
			const { data } = await api.get(`/timeline?page=${page}`, config);
			setPosts([...posts, ...data]);
			setPage(page + 1);
			if(data.length < 10) {
				setHasMoreItems(false);
			}
		} catch (e) {
			console.log(`Couldn't fetch more posts: ${e}`);
		}
	}

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
				<InfiniteScroll
					pageStart={0}
					loadMore={loadMore}
					hasMore={hasMoreItems}
					loader={
						<LoadingScroller key={0} />
					}
				>
					<Timeline posts={posts} countFollowers={countFollowers} />
				</InfiniteScroll>
			</S.ContainerCenter>
			<S.ContainerTrending>
				<Trending />
			</S.ContainerTrending>
		</S.Container>
	);
};

export default Posts;
