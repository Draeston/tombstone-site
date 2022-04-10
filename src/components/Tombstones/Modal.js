import { Form } from "./Form";
import * as ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";
import "../../assets/styles/Tombstones/Modal.css";

export function Modal(props) {
  return ReactDOM.createPortal(
    <FocusTrap>
      <aside
        role="dialog"
        tabIndex="-1"
        aria-modal="true"
        className="modal-cover"
        onClick={props.onClickOutside}
        onKeyDown={props.onKeyDown}
      >
        <div className="modal-area" ref={props.modalRef}>
          <button
            ref={props.buttonRef}
            aria-label="Close Modal"
            aria-labelledby="close-modal"
            className="_modal-close"
            type="button"
            onClick={props.closeModal}
          >
            <span id="close-modal" className="_hide-visual">
              Close
            </span>
            <svg className="_modal-close-icon" viewBox="0 0 40 40">
              <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <div className="modal-body">
            <Form
              img={props.img}
              title={props.title}
              price={props.price}
              id={props.id}
              closeModal={props.closeModal}
            />
          </div>
        </div>
      </aside>
    </FocusTrap>,
    document.body
  );
}
