import Uses from "../solutions/Uses";
import { buttonContexts, content } from "../solutions/Uses/content";

const UseCases = () => {
  return (
    <Uses
      title="Specific kiosk modes for unique use cases"
      showTabbing={true}
      buttonContexts={buttonContexts}
      content={content}
    />
  );
};

export default UseCases;
