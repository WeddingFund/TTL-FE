import * as Icons from "../assets/icons";
import styled from "styled-components";

type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  size?: number;
  alt?: string;
}

const StyledImg = styled.img<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
`;

const Icon = ({ name, size = 24, alt }: IconProps) => {
  const src = Icons[name];
  if (!src) {
    console.warn(`Icon "${name}" not found.`);
    return null;
  }
  return <StyledImg src={src} $size={size} alt={alt || name} />;
};

export default Icon;
