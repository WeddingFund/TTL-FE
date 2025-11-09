import styled from "styled-components";

interface Props {
  rows?: number;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onEnter?: () => void;
}

const Input = ({ rows = 1, placeholder, value, onChange, onEnter }: Props) => {
  if (rows === 1) {
    return (
      <SingleLineInput
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            onEnter?.();
          }
        }}
      />
    );
  }

  return (
    <MultiLineInput
      rows={rows}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

const SingleLineInput = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.light.border};
  border-radius: 10px;
  padding: 12px 16px;
  width: 100%;
`;

const MultiLineInput = styled.textarea`
  border: 1px solid ${({ theme }) => theme.colors.light.border};
  border-radius: 10px;
  padding: 12px 16px;
  resize: none;
  width: 100%;
`;

export default Input;
