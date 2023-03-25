import { Comment, CommentContainer, ContainerComments, MyComment, SendButton, UserImage, UserName, UserStatus } from "./styles";
import { FiSend } from 'react-icons/fi';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../config/api";
import { ThreeDots } from "react-loader-spinner";

export default function ShowComments({ image, postId, setNumComments }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { config } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    async function getComments() {
        try
        {
            const { data } = await api.get(`posts/${postId}/comments`, config);
            setComments(data || []);
            setLoading(false);
        } catch (error)
        {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        getComments();
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();
        try
        {
            setNewComment('');
            await api.post(`/posts/${postId}/comments`, { comment: newComment }, config);
            setNumComments(comments.length + 1);
            getComments();
        } catch (error)
        {
            console.log(error);
        }
    }

    return (
        <ContainerComments>
            {
                loading ?
                <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="white"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                        /> :
                comments.map((c, i) =>
                    <CommentContainer key={i}>
                        <UserImage src={c.image} />
                        <div>
                            <UserName>
                                {c.name}
                                <UserStatus>{c.post_author ? "• post's author" : c.following ? "• following" : ''}</UserStatus>
                            </UserName>
                            <Comment>{c.comment}</Comment>
                        </div>
                    </CommentContainer>
                )
            }
            <MyComment>
                <UserImage src={image} alt="" />
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder="write a comment..." value={newComment} onChange={(e) => setNewComment(e.target.value)} required={true} maxLength='255' />
                    <SendButton type="Submit">
                        <FiSend />
                    </SendButton>
                </form>
            </MyComment>
        </ContainerComments>
    );
}