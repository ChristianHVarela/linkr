import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import * as S from "./styles";
import { useContext, useState } from "react";
import DeleteModal from "../Modal";
import api from "../../config/api";
import { AuthContext } from "../../contexts/authContext";

const PostTimeline = (props) => {
	const { post } = props;
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [edit, setEdit] = useState(false);
	const [description, setDescription] = useState(post.description);
	const [loading, setLoading] = useState(false);

	const { config } = useContext(AuthContext);

	const navigate = useNavigate();
	const handleClick = () => {
		window.open(post.link, "_blank");
	};

	const handleEdit = () => {
		setEdit(true);
	};

	const requestEdit = async () => {
		try {
			setLoading(true);
			await api.put(`/posts/${post.id}`, { description }, config);
			setEdit(false);
			setLoading(false);
			post.description = description; //temporario?
		} catch (error) {
			console.log(error);
			alert("An error occured while trying to edit the post");
			setLoading(false);
			setEdit(false);
			setDescription(post.description);
		}
	};

	const saveDescription = async (event) => {
		if (event.key === "Enter") {
			await requestEdit();
		} else if (event.key === "Escape") {
			setDescription(post.description);
			setEdit(false);
		}
	};

	const handleFocus = (textarea) => {
		if (textarea) {
			const { value } = textarea;
			textarea.focus();
			textarea.setSelectionRange(value.length, value.length);
		}
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
								<FaPencilAlt onClick={handleEdit} />
								<FaTrashAlt
									onClick={() => setModalIsOpen(true)}
								/>
							</div>
						)}
					</S.PostTop>
					<div>
						{edit ? (
							<S.EditInput
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								ref={handleFocus}
								onKeyDown={saveDescription}
								autoFocus
								disabled={loading}
							/>
						) : (
							<ReactTagify
								tagStyle={{
									fontWeight: "bold",
									cursor: "pointer",
								}}
								tagClicked={(tag) =>
									navigate("/hashtag/" + tag.slice(1))
								}
							>
								<S.Description>
									{post.description}
								</S.Description>
							</ReactTagify>
						)}
					</div>
					<S.ContainerMetadata
						onClick={handleClick}
					></S.ContainerMetadata>
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
