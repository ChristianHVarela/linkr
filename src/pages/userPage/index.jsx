import { useContext, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useParams } from "react-router-dom";
import LoadingScroller from "../../components/LoadingScroller";
import Trending from "../../components/Trending";
import UserTimeline from "../../components/UserTimeline";
import api from "../../config/api";
import { AuthContext } from "../../contexts/authContext";
import * as S from "./styles";

const UserPage = () => {
  const { id } = useParams();
  const { config } = useContext(AuthContext)

  const [userPosts, setUserPosts] = useState(null);
  const [itsYou, setItsYou] = useState(null)
  const [follow, setFollow] = useState(false)
  const [following, setFollowing] = useState(false)
  const [page, setPage] = useState(2);
	const [hasMoreItems, setHasMoreItems] = useState(false);

  useEffect(() => {
    getUserPosts();
  }, [id]);

  const toogleFollow = async () => {
    setFollowing(true)
    try {
      const { data } = await api.post('/followers', {follower_id: id}, config)
      setFollow(data)
      setFollowing(false)
    } catch (error) {
      console.log(error);
      alert("An error occured while trying to fetch the posts, please refresh the page");
    }
  }

  const getUserPosts = async () => {
    try {
      const { data } = await api.get(`/user/${id}`, config);
      setItsYou(data[0].map(u => u.itsYou)[0])
      setFollow(data[0].map(u => u.follow)[0])
      setUserPosts(data);
    } catch (error) {
      console.log(error);
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    }
  };

  const loadMore = async () => {
		try {
			const { data } = await api.get(`/user/${id}?page=${page}`, config);
			setUserPosts([...userPosts, ...data]);
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
        {userPosts &&
          userPosts[0].map((u) => (
            <S.Title key={u.id}>
              <img src={u.image} alt="" />
              <h2>{u.name}</h2>
            </S.Title>
          ))}
        <InfiniteScroll
					pageStart={0}
					loadMore={loadMore}
					hasMore={hasMoreItems}
					loader={
						<LoadingScroller key={0} />
					}
				>
          <UserTimeline userPosts={userPosts} />
        </InfiniteScroll>
      </S.ContainerCenter>
      <S.ContainerTrending>
        <S.ContainerButtonFollowUnfollow>
          {!itsYou &&
            (follow ? (<S.ButtonUnfollow onClick={toogleFollow} disabled={following}>Unfollow</S.ButtonUnfollow>)
              : (<S.ButtonFollow onClick={toogleFollow} disabled={following}>Follow</S.ButtonFollow>))
          }
        </S.ContainerButtonFollowUnfollow>
        <Trending />
      </S.ContainerTrending>
    </S.Container>
  );
};

export default UserPage;
