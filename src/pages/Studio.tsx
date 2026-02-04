import { useParams } from "react-router-dom";
import CreateStudioGuide from "./CreateStudioGuide";

const Studio = () => {
  const params = useParams();

  return (
    <>
      {params?.studioId === "0" ? (
        <CreateStudioGuide />
      ) : (
        <h1> Studio id: {params?.studioId}</h1>
      )}
    </>
  );
};

export default Studio;
