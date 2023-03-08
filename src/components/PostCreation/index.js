import { useState } from "react"
import * as S from "./styles"
import api from '../../config/api.js'

const PostCreation = (props) => {
    const [link, setLink] = useState("")
    const [description, setDescription] = useState("")
    const { imageUrl } = props

    const handleChange = (e) => {
        e.preventDefault()
        if (!link || !description){
            alert("You must fill in all fields!")
        }
        savePosts()
    }

    const savePosts = async () => {
        try {
            const data = await api.post('/posts', {link, description})
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <S.Container>
            <div>
                <S.ImageProfile src={imageUrl} alt="" />
            </div>
            <S.FormPost onSubmit={handleChange}>
                <S.Title>What are you going to share today?</S.Title>
                <S.InputLink placeholder="http://..." onChange={e => setLink(e.target.value)} value={link} />
                <S.InputDescription placeholder="Awesome article about #javascript" onChange={e => setDescription(e.target.value)} value={description} />
                <S.ContainerButtonSubmit>
                    <S.ButtonSubmit>Publish</S.ButtonSubmit>
                </S.ContainerButtonSubmit>
            </S.FormPost>
        </S.Container>
    )
}

export default PostCreation