import { useState } from "react"
import * as S from "./styles"
import api from '../../config/api.js'

const PostCreation = (props) => {
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const [loading, setLoading] = useState(false)
    const { imageUrl, headers } = props

    const handleChange = (e) => {
        e.preventDefault()
        if (!link || !description){
            alert("You must fill in all fields!")
        } else {
            savePosts()
        }
    }

    const savePosts = async () => {
        try {
            setLoading(true)
            const data = await api.post('/posts', {link, description}, headers)
            if (data.status === 201){
                setLoading(false)
                setLink("")
                setDescription("")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <S.Container>
            <S.ContainerImageProfile>
                <S.ImageProfile src={imageUrl} alt="" />
            </S.ContainerImageProfile>
            <S.FormPost onSubmit={handleChange}>
                <S.Title>What are you going to share today?</S.Title>
                <S.InputLink placeholder="http://..." onChange={e => setLink(e.target.value)} value={link} readOnly={loading} />
                <S.InputDescription placeholder="Awesome article about #javascript" onChange={e => setDescription(e.target.value)} value={description} readOnly={loading} />
                <S.ContainerButtonSubmit>
                    <S.ButtonSubmit disabled={loading}>{loading ? "Publishing..." : "Publish"}</S.ButtonSubmit>
                </S.ContainerButtonSubmit>
            </S.FormPost>
        </S.Container>
    )
}

export default PostCreation