import React from "react";
import propTypes from "prop-types";

const OuterSideClick = ({ onHandleState, children }) => {
  const wrappedRef = React.useRef(null);

  React.useEffect(() => {
    const _handleOutSideClick = (ev) => {
      if (wrappedRef.current && !wrappedRef.current.contains(ev.target)) {
        onHandleState();
      }
    };

    document.addEventListener("mousedown", _handleOutSideClick);

    return () => {
      document.removeEventListener("mousedown", _handleOutSideClick);
    };
  }, [wrappedRef, onHandleState]);

  return <div ref={wrappedRef}>{children}</div>;
};

OuterSideClick.propTypes = {
  onHandleState: propTypes.func,
};

export default OuterSideClick;
