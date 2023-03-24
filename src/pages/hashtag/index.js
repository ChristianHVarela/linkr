import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Timeline from "../../components/Timeline"
import Trending from "../../components/Trending"
import api from "../../config/api"
import { AuthContext } from "../../contexts/authContext"
import * as S from "./styles"

const HashtagPosts = () => {
    const { config, update } = useContext(AuthContext)
    const [posts, setPosts] = useState(null)
    const { hashtag } = useParams();

    const getPosts = async () => {
        try {
            const { data } = await api.get(`/hashtag/${hashtag}`, config)
            setPosts(data)
        } catch (error) {
            alert('An error occured while trying to fetch the posts, please refresh the page')
        }
    }

    useEffect(() => {
        getPosts();
    }, [update,hashtag]);

    return (
        <S.Container>
            <S.ContainerCenter>
            <S.Title data-test="hashtag-title">#{hashtag}</S.Title>
				<Timeline posts={posts} />
			</S.ContainerCenter>
			<S.ContainerTrending>
				<Trending />
			</S.ContainerTrending>
        </S.Container>
    )
}

export default HashtagPosts
