import { Refresh, ReloadButton } from "./styles";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/authContext";

function ReloadPosts({ postsCount, setPosts, newPosts }) {
	const [loading, setLoading] = useState(false);
	const handleUpdate = () => {
		setLoading(true);
        setPosts(newPosts);
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
