import { Card } from "../components/Contacts/Card";

export function Contacts(props) {
  const listItems = props.contacts.map((contact) => (
    <Card img={contact.img} name={contact.name} telegram={contact.telegram} />
  ));
  return <div>{listItems}</div>;
}
