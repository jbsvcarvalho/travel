import styled from "styled-components";


interface FilterListButtonProps {
  backgroundColor: string;
  border: string;
}

export const FilterListButton = styled.button<FilterListButtonProps>`
  display: flex;
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => `1px solid ${props.border}`};
  padding:4px 8px;
  gap: 8px;
  width: 280px;
  border-radius: 2px;
  justify-content: start;
  align-items: center;
  gap: 15px;
  margin-bottom: 8px
`;

interface IconWrapperProps {
  color: string;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  display: flex;
  place-content: center;
  color: ${(props) => props.color};
`;

interface ListItemTextProps {
  color: string;
}

export const ListItemText = styled.span<ListItemTextProps>`
  font-size: 14px;
  color: ${(props) => props.color};
`;
