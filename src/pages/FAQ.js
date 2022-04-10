import "../assets/styles/FAQ/FAQ.css";
import { QA } from "../components/FAQ/QA";

export function FAQ(props) {
  const listItems = props.qas.map((item) => (
    <QA question={item.question} answer={item.answer} key={item.question} />
  ));
  return <div className="faq">{listItems}</div>;
}
