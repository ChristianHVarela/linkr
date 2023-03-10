import * as S from "./styles";
import Modal from "react-modal";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";
import api from "../../config/api";
import { ThreeDots } from "react-loader-spinner";

Modal.setAppElement("#root");

function DeleteModal({ modalIsOpen, setModalIsOpen, id }) {
	const [request, setRequest] = useState(false);
	const { config, update, setUpdate } = useContext(AuthContext);
	async function deletePost() {
		setRequest(true);
		try {
			await api.delete(`/posts/${id}`, config);
			setModalIsOpen(false);
			setRequest(false);
			setUpdate(update + 1);
		} catch (err) {
			setRequest(false);
			console.log(err);
			setModalIsOpen(false);
			alert("Error while deleting post.");
		}
	}

	return (
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
				{request ? (
					<ThreeDots color="#FFFFFF" />
				) : (
					<div>
						<S.ModalButton
							className="cancel"
							onClick={() => setModalIsOpen(false)}
						>
							No, go back
						</S.ModalButton>
						<S.ModalButton className="confirm" onClick={deletePost}>
							Yes, delete it
						</S.ModalButton>
					</div>
				)}
			</S.ModalDiv>
		</Modal>
	);
}

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

export default DeleteModal;
