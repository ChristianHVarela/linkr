import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";
import * as S from "./styles";
import { useContext, useState } from "react";
import DeleteModal from "../Modal";
import api from "../../config/api";
import { AuthContext } from "../../contexts/authContext";

const UserPostTimeline = (props) => {
    const { userPosts } = props

    const [modalIsOpen, setModalIsOpen] = useState(false);
	const [edit, setEdit] = useState(false);
	const [description, setDescription] = useState(userPosts.description);
	const [loading, setLoading] = useState(false);

	const { config, update, setUpdate } = useContext(AuthContext);

	const navigate = useNavigate();
	const handleClick = () => {
		window.open(userPosts.link, "_blank");
	};

	const handleEdit = () => {
		setEdit(true);
	};

	const requestEdit = async () => {
		try {
			setLoading(true);
			await api.put(`/posts/${userPosts.id}`, { description }, config);
			setEdit(false);
			setLoading(false);
			setUpdate(update + 1);
			//post.description = description; //temporario?
		} catch (error) {
			console.log(error);
			alert("An error occured while trying to edit the post");
			setLoading(false);
			setEdit(false);
			setDescription(userPosts.description);
		}
	};

	const saveDescription = async (event) => {
		if (event.key === "Enter") {
			await requestEdit();
		} else if (event.key === "Escape") {
			setDescription(userPosts.description);
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
					<S.ImageProfile src={userPosts.image_profile} alt="" />
				</S.ContainerImageProfile>
				<S.ContainerContent>
					<S.PostTop>
						<S.UserName>{userPosts.user_name}</S.UserName>
						{userPosts.author_match && (
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
									{userPosts.description}
								</S.Description>
							</ReactTagify>
						)}
					</div>
					<S.ContainerMetadata onClick={handleClick}>
						<S.ContainerMetadataContent>
							<S.TitleMetadata>{userPosts.title_metadata}</S.TitleMetadata>
							<S.DescriptionMetadata>{userPosts.description_metadata}</S.DescriptionMetadata>
							<S.LinkMetadata>{userPosts.link}</S.LinkMetadata>
						</S.ContainerMetadataContent>
						<S.ImageMetadata src={userPosts.image_metadata} alt="/" />
					</S.ContainerMetadata>
				</S.ContainerContent>
			</S.ContainerPost>
			<DeleteModal
				id={userPosts.id}
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
			/>
		</>
	);
};

export default UserPostTimeline