import { ThreeDots } from "react-loader-spinner" 
import UserPostTimeline from "../UserPostTimeline"
import * as S from "./styles"

const UserTimeline = (props) => {
    const {userPosts} = props

    return (
        <S.Container>
            {
                !userPosts ? <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="white"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                /> : userPosts[1].length === 0 ? <S.MessageEmpty>There are no posts yet</S.MessageEmpty> : userPosts[1].map((item, index) => {return <UserPostTimeline key={index} userPosts={item} />})
            }
        </S.Container>
    )
}

export default UserTimeline