import { useParams } from "react-router-dom";
import CreateStudioGuide from "./CreateStudioGuide";
import Loading from "../components/Loading";

const Studio = () => {
  const params = useParams();

  return (
    <>
      {params?.studioId === "0" ? (
        <CreateStudioGuide />
      ) : (
        <Loading />
        // <div> Studio id: {params?.studioId}</div>
      )}
    </>
  );
};

export default Studio;
