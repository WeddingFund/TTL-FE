import styled from "styled-components";

interface Props {
  name: string;
}

const Tag = ({ name }: Props) => {
  return <TagStyle>{name}</TagStyle>;
};

const TagStyle = styled.div`
  cursor: default;
  height: 20px;
  color: #ffffff;
  background-color: #000000;
  border-radius: 20px;
  font-size: 12px;
  padding: 3px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Tag;
