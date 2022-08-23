import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import "./AvatarModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

const AvatarModal = ({showAvatarModal, setShowAvatarModal}) => {
  const avatarModalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showAvatarModal ? 1 : 0,
    transform: showAvatarModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showAvatarModal) {
        setShowAvatarModal(false);
      }
    },
    [setShowAvatarModal, showAvatarModal]
  );
  const closeModal = e => {
    if (avatarModalRef.current === e.target) {
      setShowAvatarModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
  <>
   {showAvatarModal ? (
        <div className="a-m-background" onClick={closeModal} ref={avatarModalRef}>
          <animated.div style={animation}>
            <div className="a-m-wrapper">
              <div className="a-m-content">
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Join Now</button>
              </div>
              <FontAwesomeIcon className="a-m-close"
                icon={faMultiply}
                onClick={() => setShowAvatarModal(prev => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
  </>
  )
};

export default AvatarModal;
