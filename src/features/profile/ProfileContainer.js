import ProfileCover from "../../route/ProfileCover";
import ProfileInfo from "./ProfileInfo";

function ProfileContainer() {
  return (
    <div
      className="shadow-sm pb-2"
      style={{ backgroundImage: "linear-gradient(#f0f2f5, #fff)" }}
    >
      <ProfileCover />
      <ProfileInfo />
    </div>
  );
}

export default ProfileContainer;
