import React, { useEffect, useRef } from "react";

function ClickAwayListener({ onClickAway, ...props }) {
  const containerRef = useRef(null);
  useEffect(() => {
    /* A Function that is used to detect if the user clicks outside of the menu. */
    const handleClickOutsideMenu = (e) => {
      containerRef.current &&
        !containerRef.current.contains(e.target) &&
        onClickAway();
    };
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [onClickAway]);
  return (
    <div
      ref={containerRef}
      {...props}
      style={{ display: "flex", flexDirection: "column" }}
    />
  );
}

export default ClickAwayListener;
