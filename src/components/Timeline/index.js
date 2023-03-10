import { ThreeDots } from "react-loader-spinner"
import PostTimeline from "../PostTimeline"
import * as S from "./styles"

const Timeline = (props) => {
    const {posts} = props

    return (
        <S.Container>
            {
                !posts ? <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="white"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
                /> : posts.length === 0 ? <S.MessageEmpty data-test="message">There are no posts yet</S.MessageEmpty> : posts.map((item) => {return <PostTimeline key={item.id} post={item} />})
            }
        </S.Container>
    )
}

export default Timeline