import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import * as S from "./styles";
import { useState } from "react";
import DeleteModal from "../Modal";

const PostTimeline = (props) => {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const { post } = props;
	const navigate = useNavigate();
	const handleClick = () => {
		window.open(post.link, "_blank");
	};

	return (
		<>
			<S.ContainerPost>
				<S.ContainerImageProfile>
					<S.ImageProfile src={post.image_profile} alt="" />
				</S.ContainerImageProfile>
				<S.ContainerContent>
					<S.PostTop>
						<S.UserName>{post.user_name}</S.UserName>
						{post.author_match && (
							<div>
								<FaPencilAlt />
								<FaTrashAlt
									onClick={() => setModalIsOpen(true)}
								/>
							</div>
						)}
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
					<S.ContainerMetadata onClick={handleClick}>
						<S.ContainerMetadataContent>
							<S.TitleMetadata>{post.title_metadata}</S.TitleMetadata>
							<S.DescriptionMetadata>{post.description_metadata}</S.DescriptionMetadata>
							<S.LinkMetadata>{post.link}</S.LinkMetadata>
						</S.ContainerMetadataContent>
						<S.ImageMetadata src={post.image_metadata} alt="/" />
					</S.ContainerMetadata>
				</S.ContainerContent>
			</S.ContainerPost>
			<DeleteModal
				id={post.id}
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
			/>
		</>
	);
};

export default PostTimeline;
