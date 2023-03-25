import { ThreeDots } from "react-loader-spinner"
import PostTimeline from "../PostTimeline"
import * as S from "./styles"

const Timeline = (props) => {
    const { posts, countFollowers } = props

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
                /> : posts.length === 0 ? 
                    (countFollowers > 0 ? <S.MessageEmpty data-test="message">No posts found from your friends</S.MessageEmpty> : 
                        <S.MessageEmpty data-test="message">You don't follow anyone yet. Search for new friends!</S.MessageEmpty>)
                         : posts.map((item) => { return <PostTimeline key={item.id} post={item} /> })
            }
        </S.Container>
    )
}

export default Timeline