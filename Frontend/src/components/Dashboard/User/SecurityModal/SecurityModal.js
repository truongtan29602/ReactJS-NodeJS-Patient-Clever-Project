import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import "./SecurityModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

const SecurityModal = () => {
  const [showSecurityModal, setShowSecurityModal] = useState(false);
  const securityModalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showSecurityModal ? 1 : 0,
    transform: showSecurityModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showSecurityModal) {
        setShowSecurityModal(false);
      }
    },
    [setShowSecurityModal, showSecurityModal]
  );
  const closeModal = e => {
    if (securityModalRef.current === e.target) {
      setShowSecurityModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
  <>
  <button className="s-m-btn" onClick={() => setShowSecurityModal(true)}>Edit</button>
   {showSecurityModal ? (
        <div className="s-m-background" onClick={closeModal} ref={securityModalRef}>
          <animated.div style={animation}>
            <div className="s-m-wrapper">
              <div className="s-m-content">
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Join Now</button>
              </div>
              <FontAwesomeIcon className="s-m-close"
                icon={faMultiply}
                onClick={() => setShowSecurityModal(prev => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
  </>
  )
};

export default SecurityModal;
