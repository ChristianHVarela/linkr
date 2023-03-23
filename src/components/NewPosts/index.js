import { Refresh, ReloadButton } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

function ReloadPosts({ postsCount }) {
	const [loading, setLoading] = useState(false);
	const { update, setUpdate } = useContext(AuthContext);
	const handleUpdate = () => {
		setLoading(true);
		setUpdate(update + 1);
	};
	return (
		<ReloadButton
			onClick={handleUpdate}
			className={loading ? "loading" : ""}
		>
			{`${postsCount} new posts, load more!`}{" "}
			<Refresh className={loading ? "loading" : ""} />
		</ReloadButton>
	);
}

export default ReloadPosts;
