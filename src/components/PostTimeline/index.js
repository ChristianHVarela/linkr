import * as S from "./styles"

const PostTimeline = (props) => {
    const { post } = props

    const handleClick = () => {
        window.open(post.link, "_blank");
      }

    return (
        <S.ContainerPost onClick={handleClick}>
            <S.ContainerImageProfile>
                <S.ImageProfile src={post.image_profile} alt="" />
            </S.ContainerImageProfile>
            <S.ContainerContent>
                <div>
                    <S.UserName>{post.user_name}</S.UserName>
                    <S.Description>{post.description}</S.Description>
                </div>
                <S.ContainerMetadata>
                    <S.ContainerMetadataContent>
                        <S.TitleMetadata>{post.title_metadata}</S.TitleMetadata>
                        <S.DescriptionMetadata>{post.description_metadata}</S.DescriptionMetadata>
                        <S.LinkMetadata>{post.link}</S.LinkMetadata>
                    </S.ContainerMetadataContent>
                    <S.ImageMetadata src={post.image_metadata} alt="/" />
                </S.ContainerMetadata>
            </S.ContainerContent>
        </S.ContainerPost>
    )
}

export default PostTimeline