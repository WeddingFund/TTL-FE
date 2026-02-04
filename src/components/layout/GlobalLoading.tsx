import styled from "styled-components";
import { HashLoader } from "react-spinners";
import { useLoading } from "../../context/LoadingContext";

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(2px);
  overflow: hidden;
`;

const GlobalLoading = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <Overlay>
      <HashLoader color="#ffffff" size={50} />
    </Overlay>
  );
};

export default GlobalLoading;
