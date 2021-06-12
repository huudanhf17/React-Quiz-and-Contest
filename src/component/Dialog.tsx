import React from "react";
import ReactDOM from "react-dom";
import "./Dialog.css";

const Dialog = ({ WrappedComponent, isShowing, ...props }: any) => {
  return ReactDOM.createPortal(
    <React.Fragment>
      <div className="SpecificModal-overlay" />
      <div
        className="SpecificModal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="SpecificModal">
          <WrappedComponent {...props}></WrappedComponent>
        </div>
      </div>
    </React.Fragment>,
    document.body,
  );
};
export default Dialog;
