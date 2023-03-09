import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import {FaTrashAlt, FaPencilAlt} from "react-icons/fa";
import * as S from "./styles";

const PostTimeline = (props) => {
	const { post } = props;
	const navigate = useNavigate();
	const handleClick = () => {
		window.open(post.link, "_blank");
	};

	return (
		<S.ContainerPost>
			<S.ContainerImageProfile>
				<S.ImageProfile src={post.image_profile} alt="" />
			</S.ContainerImageProfile>
			<S.ContainerContent>
				<S.PostTop>
					<S.UserName>{post.user_name}</S.UserName>
					<div>
                        <FaPencilAlt />
                        <FaTrashAlt />
                    </div>
				</S.PostTop>
				<div>
					<ReactTagify
						tagStyle={{ fontWeight: "bold", cursor: "pointer" }}
						tagClicked={(tag) =>
							navigate("/hashtag/" + tag.slice(1))
						}
					>
						<S.Description>{post.description}</S.Description>
					</ReactTagify>
				</div>
				<S.ContainerMetadata
					onClick={handleClick}
				></S.ContainerMetadata>
			</S.ContainerContent>
		</S.ContainerPost>
	);
};

export default PostTimeline;
