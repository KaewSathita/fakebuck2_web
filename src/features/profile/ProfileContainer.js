import ProfileCover from "./ProfileCover";
import ProfileInfo from "./ProfileInfo";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLoading } from "../../contexts/LoadingContext";
import * as userService from "../../api/userApi";
import { toast } from "react-toastify";
import { FRIEND_STATUS_ME } from "../../config/constants";
import { useAuth } from "../../contexts/AuthContext";

function ProfileContainer() {
  const { id } = useParams();
  const { startLoading, stopLoading } = useLoading();

  const [user, setUser] = useState({});
  const [friend, setFriend] = useState([]);
  const [statusWithMe, setStatusWithMe] = useState("");

  const { user: me } = useAuth();

  useEffect(() => {
    const fetchUserFriends = async () => {
      try {
        startLoading();
        const res = await userService.getUserFriends(id);
        setUser(res.data.user);
        setFriend(res.data.friends);
        setStatusWithMe(res.data.statusWithMe);
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data.message);
      } finally {
        stopLoading();
      }
    };
    fetchUserFriends();
  }, [id, me]);

  return (
    <div
      className="shadow-sm pb-2"
      style={{ backgroundImage: "linear-gradient(#f0f2f5, #fff)" }}
    >
      <ProfileCover coverImage={user.coverImage} />
      <ProfileInfo isMe={statusWithMe === FRIEND_STATUS_ME} user={user} />
    </div>
  );
}

export default ProfileContainer;
