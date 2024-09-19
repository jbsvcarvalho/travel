import colors from "../../../utils/themes/colors";
import styled from "styled-components";

export const StarContainer = styled.div`
  font-size: 18px;
`;

export const Star = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  text-align: center;
  line-height: 8px;
  font-size: 20px;
  color: #ffd700;
`;

export const FilledStar = styled(Star)`
  margin-top: 3px;
  padding: 1px;
`;

export const EmptyStar = styled(Star)``;

export const FilterPropertyButton = styled.button<{
  backgroundColor: string;
  border: string;
}>`
  background-color: ${(props: any) => props.backgroundColor};
  width: auto;
  min-width: 2rem;
  border: 1px solid ${colors.gray};
  border-radius: ${(props: any) => props.border};
  display: flex;
  flex-direction: row;
  color: white;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: ${colors.gray};
  >span{
    padding: 0 7px;
  }
`;
