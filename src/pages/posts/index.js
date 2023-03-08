import { useState } from "react"
import PostCreation from "../../components/PostCreation"
import Timeline from "../../components/Timeline"
import * as S from "./styles"

const Posts = () => {
    const [imageUrl, setImageUrl] = useState("https://static.poder360.com.br/2021/08/Lula-Boxe-2-868x644-1-e1629756322652.png")

    return (
        <S.Container>
            <S.Title>timeline</S.Title>
            <PostCreation imageUrl={imageUrl} />
        </S.Container>
    )
}

export default Posts