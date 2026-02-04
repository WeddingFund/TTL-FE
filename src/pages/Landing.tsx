import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: black;
  color: white;
  overflow: hidden;
`;

const HeroSection = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 1rem;
  max-width: 80rem;
  margin: 0 auto;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1s ease-out;

  div {
    width: 5rem;
    height: 5rem;
    background-color: white;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: black;
      font-weight: bold;
      font-size: 1.875rem;
    }
  }
`;

const MainHeading = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  animation: ${fadeInUp} 1s ease-out;

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 6rem;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 3rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInUp} 1s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }

  br {
    display: none;

    @media (min-width: 768px) {
      display: block;
    }
  }
`;

const CTAButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  animation: ${fadeInUp} 1s ease-out;
  animation-delay: 0.4s;
  animation-fill-mode: backwards;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const PrimaryButton = styled.button`
  padding: 1rem 2rem;
  background-color: white;
  color: black;
  font-weight: 500;
  border-radius: 0.75rem;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 12.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.9);

    svg {
      transform: translateX(0.25rem);
    }
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    transition: transform 0.2s;
  }
`;

const SecondaryButton = styled.button`
  padding: 1rem 2rem;
  background-color: rgba(255, 255, 255, 0.05);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 500;
  border-radius: 0.75rem;
  transition: background-color 0.2s;
  min-width: 12.5rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 5rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  animation: ${fadeInUp} 1s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: backwards;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:nth-child(2) {
    border-left: 1px solid rgba(255, 255, 255, 0.1);
    border-right: 1px solid rgba(255, 255, 255, 0.1);
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .number {
    font-size: 1.875rem;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 2.25rem;
    }
  }

  .label {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.4);

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const Landing = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("login", "success"); // @todo 로그인 로직 추가
    navigate("/");
  };

  return (
    <Container>
      <HeroSection>
        <Content>
          <Logo>
            <div>
              <span>TTL</span>
            </div>
          </Logo>

          <MainHeading>
            Your Story,
            <br />
            <span>Inked Forever</span>
          </MainHeading>

          <Subtitle>
            타투이스트와 연결되고, 완벽한 디자인을 찾고,
            <br />
            당신만의 이야기를 새기세요
          </Subtitle>

          <CTAButtons>
            <PrimaryButton onClick={handleLogin}>
              <span>Sign In</span>
              <ArrowRight />
            </PrimaryButton>
            <SecondaryButton>Learn More</SecondaryButton>
          </CTAButtons>

          <Stats>
            <StatItem>
              <div className="number">10K+</div>
              <div className="label">타투 디자인</div>
            </StatItem>
            <StatItem>
              <div className="number">500+</div>
              <div className="label">타투이스트</div>
            </StatItem>
            <StatItem>
              <div className="number">50K+</div>
              <div className="label">회원</div>
            </StatItem>
          </Stats>
        </Content>
      </HeroSection>
    </Container>
  );
};

export default Landing;
