import profileImage from "../../assets/images/profile-image.png";

function Avatar({ src, size, borderSize, borderColor }) {
  const classes = `${borderSize ? "border border-" + borderSize : ""}${
    borderColor ? " border-" + borderColor : ""
  }`;
  return (
    <div>
      <img
        src={src || profileImage}
        className="rounded-circle cursor-pointer"
        width={size}
        height={size}
        alt="user"
      />
    </div>
  );
}
export default Avatar;
