import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserTimeline from "../../components/UserTimeline";
import api from "../../config/api";
import { AuthContext } from "../../contexts/authContext";
import * as S from "./styles";

const UserPage = () => {
  const { id } = useParams();

  const [userPosts, setUserPosts] = useState(null);
  const { config } = useContext(AuthContext);
  useEffect(() => {
    getUserPosts();
  }, [id]);

  const getUserPosts = async () => {
    try {
      const { data } = await api.get(`/user/${id}`, config);
      setUserPosts(data);
    } catch (error) {
      console.log(error);
      alert(
        "An error occured while trying to fetch the posts, please refresh the page"
      );
    }
  };

  return (
    <S.Container>
      {userPosts &&
        userPosts[0].map((u) => (
          <S.Title key={u.id}>
            <img src={u.image} alt="" />
            <h2>{u.name}</h2>
          </S.Title>
        ))}

      <UserTimeline userPosts={userPosts} />
    </S.Container>
  );
};

export default UserPage;
