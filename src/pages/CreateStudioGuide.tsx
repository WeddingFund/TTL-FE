import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";
import EmptyImage from "../assets/empty-image.svg";

const CreateStudioGuide = () => {
  const navigate = useNavigate();
  const startCreate = useCallback(() => {
    navigate(`/studio/create`);
  }, [navigate]);
  return (
    <GuideWrapper>
      <img src={EmptyImage} alt="empty" />
      <div className="guide-text">
        <div className="main">You don’t have a studio yet.</div>
        <div className="sub">Would you like to create one?</div>
      </div>
      <Button onClick={startCreate}>Create</Button>
    </GuideWrapper>
  );
};

const GuideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 22px;
  .guide-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    .main {
      font-size: 24px;
      font-weight: 500;
    }
    .sub {
      font-size: 16px;
    }
  }
`;

export default CreateStudioGuide;
