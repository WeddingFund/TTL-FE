import { useParams } from "react-router-dom";
import CreateStudioGuide from "./CreateStudioGuide";

const Studio = () => {
  const params = useParams();

  return (
    <>
      {params?.studioId === "0" ? (
        <CreateStudioGuide />
      ) : (
        <div> Studio id: {params?.studioId}</div>
      )}
    </>
  );
};

export default Studio;
