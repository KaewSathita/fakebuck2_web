function ProfileCover() {
  return (
    <div
      className="overflow-hidden position-relative mx-auto rounded-b-lg max-w-274 max-h-101"
      style={{
        aspectRatio: "1096/404",
      }}
    >
      <img
        src="https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cover"
        className="img-fluid position-absolute top-50 start-50 translate-middle"
      />
    </div>
  );
}

export default ProfileCover;
