import { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";

function ProfileIcon() {
  const [isOpen, setIsOpen] = useState();
  const dropdownEl = useRef();

  useEffect(() => {
    const handleClinkOutSide = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClinkOutSide);
    return () => document.addEventListener("mousedown", handleClinkOutSide);
  }, []);
  return (
    <div className="d-flex justify-content-end flex-1">
      <div className="dropdown" ref={dropdownEl}>
        <DropdownToggle onClick={() => setIsOpen((prev) => !prev)} />
        <DropdownMenu open={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
}
export default ProfileIcon;
