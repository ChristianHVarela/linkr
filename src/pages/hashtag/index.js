import { useContext, useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroller"
import { useParams } from "react-router-dom"
import LoadingScroller from "../../components/LoadingScroller"
import Timeline from "../../components/Timeline"
import Trending from "../../components/Trending"
import api from "../../config/api"
import { AuthContext } from "../../contexts/authContext"
import * as S from "./styles"

const HashtagPosts = () => {
    const { config, update } = useContext(AuthContext)
    const [posts, setPosts] = useState(null)
    const [page, setPage] = useState(2);
	const [hasMoreItems, setHasMoreItems] = useState(false);
    const { hashtag } = useParams();

    const getPosts = async () => {
        try {
            const { data } = await api.get(`/hashtag/${hashtag}`, config)
            setPosts(data)
            setHasMoreItems(data.length === 10);
        } catch (error) {
            alert('An error occured while trying to fetch the posts, please refresh the page')
        }
    }

    useEffect(() => {
        getPosts();
        setPage(2);
    }, [update,hashtag]);

    const loadMore = async () => {
		try {
			const { data } = await api.get(`/hashtag/${hashtag}?page=${page}`, config);
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
            <S.Title data-test="hashtag-title">#{hashtag}</S.Title>
            <InfiniteScroll
					pageStart={0}
					loadMore={loadMore}
					hasMore={hasMoreItems}
					loader={
						<LoadingScroller key={0} />
					}
				>
					<Timeline posts={posts} />
				</InfiniteScroll>
			</S.ContainerCenter>
			<S.ContainerTrending>
				<Trending />
			</S.ContainerTrending>
        </S.Container>
    )
}

export default HashtagPosts
