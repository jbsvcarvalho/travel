import styled from "styled-components";
import colors from "../../../utils/themes/colors";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: row;
`;

export const CheckboxInput = styled.input`
  appearance: none;
  margin-right: 8px;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:checked {
    background-color: #007bff;
    border-color: #007bff;
  }
`;

export const CheckboxLabel = styled.span`
  font-size: 14px;
  color: ${colors.dark};
`;
