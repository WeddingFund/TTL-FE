import styled from "styled-components";
import EmptyImage from "../assets/empty-image.svg";

const ComingSoon = () => {
  return (
    <GuideWrapper>
      <img src={EmptyImage} alt="empty" />
      <div className="guide-text">
        <div className="main">Coming Soon</div>
        <div className="sub">This page will be updated soon.</div>
      </div>
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

export default ComingSoon;
