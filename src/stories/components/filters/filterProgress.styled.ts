import styled from "styled-components";
import colors from "../../../utils/themes/colors";

export const FilterProgressContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 8px;
`;

export const ProgressBarContainer = styled.div`
  width: 160px;
  height: 26px;
  background-color: ${colors.gray};
  border-radius: 2px;
`;

export const ProgressBarFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${(props) => props.percentage}%;
  background-color: #ffad0d;
  border-radius: 2px;
  position: relative;
`;

export const ProgressBarText = styled.span`
  color: white;
  font-size: 12px;
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translate(-50%, -50%);
`;
export const FilterProgressText = styled.span`
  color: ${colors.dark};
  font-size: 12px;
`;
