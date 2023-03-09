import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import * as S from "./styles";
import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root")

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
						<div>
							<FaPencilAlt />
							<FaTrashAlt onClick={() => setModalIsOpen(true)} />
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
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				style={modalStyle}
				contentLabel="Example Modal"
			>
				<S.ModalDiv>
					<S.ModalText>
						Are you sure you want to delete this post?
					</S.ModalText>
					<div>
						<S.ModalButton
							className="cancel"
							onClick={() => setModalIsOpen(false)}
						>
							No, go back
						</S.ModalButton>
						<S.ModalButton
							className="confirm"
							onClick={() => setModalIsOpen(false)}
						>
							Yes, delete it
						</S.ModalButton>
					</div>
				</S.ModalDiv>
			</Modal>
		</>
	);
};

const modalStyle = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		backgroundColor: "#333333",
		borderRadius: "50px 130px",
		padding: "40px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
};

export default PostTimeline;
