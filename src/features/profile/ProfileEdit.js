import { useState } from "react";
import Modal from "../../components/ui/Modal";
import ProfileImageForm from "./ProfileImageForm";
import CoverImageForm from "./CoverImageForm";

function ProfileEdit() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button className="btn btn-gray-200" onClick={() => setIsOpen(true)}>
        <i className="fa-solid fa-pen" /> Edit Profile
      </button>
      <Modal
        title="Edit Profile"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ProfileImageForm />
        <CoverImageForm />
      </Modal>
    </>
  );
}

export default ProfileEdit;
