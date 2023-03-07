import { useState } from "react"
import PostCreation from "../../components/PostCreation"
import { Container, Title } from "./styles"

const Posts = () => {
    const {imageUrl, setImageUrl} = useState('https://static.poder360.com.br/2021/08/Lula-Boxe-2-868x644-1-e1629756322652.png')
    return (
        <Container>
            <Title>timeline</Title>
            <PostCreation imageUrl={imageUrl} />
        </Container>
    )
}

export default Posts