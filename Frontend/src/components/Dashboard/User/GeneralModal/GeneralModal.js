import React, { useState, useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import "./GeneralModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMultiply } from "@fortawesome/free-solid-svg-icons";

const GeneralModal = () => {
  const [showGeneralModal, setShowGeneralModal] = useState(false);
  const generalModalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showGeneralModal ? 1 : 0,
    transform: showGeneralModal ? `translateY(0%)` : `translateY(-100%)`,
  });
  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showGeneralModal) {
        setShowGeneralModal(false);
      }
    },
    [setShowGeneralModal, showGeneralModal]
  );
  const closeModal = e => {
    if (generalModalRef.current === e.target) {
      setShowGeneralModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);
  return (
  <>
  <button className="g-m-btn" onClick={() => setShowGeneralModal(true)}>Edit</button>
   {showGeneralModal ? (
        <div className="g-m-background" onClick={closeModal} ref={generalModalRef}>
          <animated.div style={animation}>
            <div className="g-m-wrapper">
              <div className="g-m-content">
                <h1>Are you ready?</h1>
                <p>Get exclusive access to our next launch.</p>
                <button>Join Now</button>
              </div>
              <FontAwesomeIcon className="g-m-close"
                icon={faMultiply}
                onClick={() => setShowGeneralModal(prev => !prev)}
              />
            </div>
          </animated.div>
        </div>
      ) : null}
  </>
  )
};

export default GeneralModal;
