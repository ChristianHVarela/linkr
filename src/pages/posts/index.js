import { useContext, useEffect, useState } from "react"
import PostCreation from "../../components/PostCreation"
import Timeline from "../../components/Timeline"
import Trending from "../../components/Trending"
import api from "../../config/api"
import { AuthContext } from "../../contexts/authContext"
import * as S from "./styles"

const Posts = () => {
    const { image, config, update } = useContext(AuthContext)
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        getPosts();
        const interval = setInterval(() => {
            getPosts();
        }, 5000);
        return () => clearInterval(interval);
    }, [update]);

    const getPosts = async () => {
        try {
            const { data } = await api.get('/timeline', config)
            setPosts(data)
        } catch (error) {
            alert('An error occured while trying to fetch the posts, please refresh the page')
        }
    }

    return (
        <S.Container>
            <S.ContainerCenter>
                <S.Title>timeline</S.Title>
                <PostCreation imageUrl={image} headers={config} />
                <Timeline posts={posts} />
            </S.ContainerCenter>
            <Trending />
        </S.Container>
    )
}

export default Posts