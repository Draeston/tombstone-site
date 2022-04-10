import "../../assets/styles/FAQ/QA.css";

export function QA(props) {
  return (
    <div>
      <p className="question">{props.question}</p>
      <p className="answer">{props.answer}</p>
    </div>
  );
}
