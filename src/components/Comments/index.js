import { ContainerComments, MyComment, SendButton } from "./styles";
import { FiSend } from 'react-icons/fi';
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../config/api";

export default function ShowComments({ image, postId }) {
    const [comment, setComment] = useState('');
    const { config } = useContext(AuthContext);

    async function handleSubmit(event) {
        event.preventDefault();
        try
        {
            setComment('');
			await api.post(`/posts/${postId}/comments`, { comment }, config);
		} catch (error) {
			console.log(error);
		}
    }

    return (
        <ContainerComments>
            <MyComment>
                <img src={image} alt="" />
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="write a comment..." value={comment} onChange={(e) => setComment(e.target.value)} />
                    <SendButton type="Submit">
                        <FiSend />
                    </SendButton>
                </form>
            </MyComment>
        </ContainerComments>
    );
}