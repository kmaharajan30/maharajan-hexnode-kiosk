import Uses from "../solutions/Uses";
import { buttonContexts, possibilties } from "./possiblities";

const Possibilites = () => {
  return (
    <Uses
      title="What additional possibilities does the Kiosk mode offer?"
      buttonContexts={buttonContexts}
      content={possibilties}
    />
  );
};

export default Possibilites;
