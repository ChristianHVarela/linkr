import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Timeline from "../../components/Timeline"
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
        const interval = setInterval(() => {
            getPosts();
        }, 5000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [update]);

    return (
        <S.Container>
            <S.Title>#{hashtag}</S.Title>
            <Timeline posts={posts} />
        </S.Container>
    )
}

export default HashtagPosts