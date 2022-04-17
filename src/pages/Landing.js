// background images will be changed later
import { Hero } from "../components/Landing/Hero";
import { Info } from "../components/Landing/Info";
import MakeOrder from "../components/Landing/MakeOrder";

export function Landing() {
  const infoText = [];
  infoText.push(
    "We are glad to help the customers to decide and design proper and cheap product that will delivered their waits as fast as possible and to avoid any difficulties that can occur."
  );
  infoText.push(
    "Our tombstones are really of high quality and we will make sure it will not be destroyed in 5-10 years"
  );
  infoText.push(
    "We will make sure that your buried will rest in the ground calmly"
  );
  return (
    <div>
      <Hero />
      <Info text={infoText[0]} image="1.png" isReverted={false} />
      <Info text={infoText[1]} image="2.png" />
      <Info text={infoText[2]} image="3.png" isReverted={false} />
      <MakeOrder />
    </div>
  );
}
