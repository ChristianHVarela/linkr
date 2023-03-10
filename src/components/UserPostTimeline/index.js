import * as S from "./styles"

const UserPostTimeline = (props) => {
    const { userPosts } = props

    console.log('batata')
    console.log(userPosts)

    const handleClick = () => {
        window.open(userPosts.link, "_blank");
      }

    return (
        <S.ContainerPost onClick={handleClick}>
            <S.ContainerImageProfile>
                <S.ImageProfile src={userPosts.image} alt="" />
            </S.ContainerImageProfile>
            <S.ContainerContent>
                <div>
                    <S.UserName>{userPosts.name}</S.UserName>
                    <S.Description>{userPosts.description}</S.Description>
                </div>
                <S.ContainerMetadata>

                </S.ContainerMetadata>
            </S.ContainerContent>
        </S.ContainerPost>
    )
}

export default UserPostTimeline