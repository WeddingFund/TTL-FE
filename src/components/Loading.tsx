import { HashLoader } from "react-spinners";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <HashLoader />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Loading;
