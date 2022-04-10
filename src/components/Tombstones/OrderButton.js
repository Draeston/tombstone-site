export function OrderButton(props) {
  return (
    <button
      type="button"
      onClick={props.showModal}
      ref={props.buttonRef}
      className={props.className}
    >
      Make an order
    </button>
  );
}
