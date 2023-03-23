import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";
import { FaTrashAlt, FaPencilAlt, FaCreativeCommonsZero } from "react-icons/fa";
import * as S from "./styles";
import { useContext, useEffect, useState } from "react";
import DeleteModal from "../Modal";
import api from "../../config/api";
import { AuthContext } from "../../contexts/authContext";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { AiOutlineComment } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import ShowComments from "../Comments";

const PostTimeline = (props) => {
	const { post } = props;
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [edit, setEdit] = useState(false);
	const [description, setDescription] = useState(post.description);
	const [liked, setLiked] = useState(post.liked_by_me);
	const [numLikes, setNumLikes] = useState(Number(post.num_likes));
	const [likes, setLikes] = useState(post.likes);
	const [showComments, setShowComments] = useState(false);
	const [loading, setLoading] = useState(false);
	const [tooltipContent, setTooltipContent] = useState(`você, ${post.likes[0]} e outras ${numLikes - 2} pessoas`);
	const { image } = useContext(AuthContext);

	const { config, update, setUpdate } = useContext(AuthContext);
	useEffect(() => {
		if (numLikes === 0) setTooltipContent(`Nenhuma curtida`)
		else if (numLikes === 1)
		{
			if (liked) setTooltipContent('Você curtiu');
			else setTooltipContent(`${likes[0].name} curtiu`);
		}
		else
		{
			if (liked) setTooltipContent(`Você e ${likes[0].name} curtiram`);
			else setTooltipContent(`${likes[0].name} e ${likes[1].name} curtiram`);
		}
	}, [likes]);


	const navigate = useNavigate();
	const handleClick = () => {
		window.open(post.link, "_blank");
	};

	const handleEdit = () => {
		setEdit(true);
	};

	const requestEdit = async () => {
		try
		{
			setLoading(true);
			await api.put(`/posts/${post.id}`, { description }, config);
			setEdit(false);
			setLoading(false);
			setUpdate(update + 1);
			//post.description = description; //temporario?
		} catch (error)
		{
			console.log(error);
			alert("An error occured while trying to edit the post");
			setLoading(false);
			setEdit(false);
			setDescription(post.description);
		}
	};

	const saveDescription = async (event) => {
		if (event.key === "Enter")
		{
			await requestEdit();
		} else if (event.key === "Escape")
		{
			setDescription(post.description);
			setEdit(false);
		}
	};

	const handleFocus = (textarea) => {
		if (textarea)
		{
			const { value } = textarea;
			textarea.focus();
			textarea.setSelectionRange(value.length, value.length);
		}
	};


	const likePost = async () => {
		setLiked(true);
		setNumLikes(Number(numLikes) + 1);
		const likes = await api.get(`/posts/likes/${post.id}`, config);
		setLikes(likes.data.likes);
	};

	const dislikePost = async () => {
		setLiked(false);
		setNumLikes(Number(numLikes) - 1);
		const likes = await api.delete(`/posts/likes/${post.id}`, config);
		setLikes(likes.data.likes);
	};

	function openUserPage(id) {
		navigate(`/user/${id}`)
	}



	return (
		<S.ContainerPost>
			<S.Post data-test="post">
				<S.SideBar>
					<S.ImageProfile onClick={() => openUserPage(post.user_id)} src={post.image_profile} alt="" />
					{
						liked ?
							<IoHeart data-test="like-btn" onClick={dislikePost} color='red' /> :
							<IoHeartOutline data-test="like-btn" onClick={likePost} color='white' />
					}
					<p data-test="counter" data-tooltip-id={`${post.id}`} className={`numLikes`}>{numLikes} likes</p>
					<Tooltip id={`${post.id}`} content={tooltipContent} place="bottom" data-test="tooltip" className="tooltip"></Tooltip>
					<AiOutlineComment color="white" onClick={() => setShowComments(!showComments)} />
					<p>0 comments</p>
				</S.SideBar>
				<S.ContainerContent>
					<S.PostTop>
						<S.UserName data-test="username" onClick={() => openUserPage(post.user_id)}>{post.user_name}</S.UserName>
						{post.author_match && (
							<div>
								<FaPencilAlt onClick={handleEdit} data-test="edit-btn" />
								<FaTrashAlt
									data-test="delete-btn"
									onClick={() => setModalIsOpen(true)}
								/>
							</div>
						)}
					</S.PostTop>
					<div>
						{edit ? (
							<S.EditInput
								data-test="edit-input"
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
								<S.Description data-test="description">
									{post.description}
								</S.Description>
							</ReactTagify>
						)}
					</div>
					<S.ContainerMetadata data-test="link" onClick={handleClick}>
						<S.ContainerMetadataContent>
							<S.TitleMetadata>{post.title_metadata}</S.TitleMetadata>
							<S.DescriptionMetadata>{post.description_metadata}</S.DescriptionMetadata>
							<S.LinkMetadata>{post.link}</S.LinkMetadata>
						</S.ContainerMetadataContent>
						<S.ImageMetadata src={post.image_metadata} alt="/" />
					</S.ContainerMetadata>
				</S.ContainerContent>
			</S.Post>
			{
				showComments &&
				<ShowComments image={image} postId={post.id} />
			}

			<DeleteModal
				id={post.id}
				modalIsOpen={modalIsOpen}
				setModalIsOpen={setModalIsOpen}
			/>
		</S.ContainerPost>
	);
};

export default PostTimeline;
