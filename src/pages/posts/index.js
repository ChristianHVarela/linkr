import { useContext, useEffect, useState } from "react"
import PostCreation from "../../components/PostCreation"
import Timeline from "../../components/Timeline"
import api from "../../config/api"
import { AuthContext } from "../../contexts/authContext"
import * as S from "./styles"

const Posts = () => {
    const [posts, setPosts] = useState(null)
    const { config, update } = useContext(AuthContext);

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
            <S.Title>timeline</S.Title>
            <PostCreation imageUrl={"https://static.poder360.com.br/2021/08/Lula-Boxe-2-868x644-1-e1629756322652.png"} />
            <Timeline posts={posts} />
        </S.Container>
    )
}

export default Posts