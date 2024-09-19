import React from "react";
import {
  FilterProgressContainer,
  FilterProgressText,
  ProgressBarContainer,
  ProgressBarFill,
  ProgressBarText,
} from "./filterProgress.styled";

interface FilterProgressI {
  percentage: number;
  label: string;
  number: number;
}

interface FilterProgressProps {
  data: FilterProgressI[];
}

const FilterProgress: React.FC<FilterProgressProps> = ({ data = [] }) => (
  <>
    {data.map((item: any) => (
      <FilterProgressContainer key={item.label}>
        <ProgressBarContainer>
          <ProgressBarFill percentage={item.percentage}>
            <ProgressBarText>{item.percentage}+</ProgressBarText>
          </ProgressBarFill>
        </ProgressBarContainer>
        <FilterProgressText>
          {item.label} ({item.number})
        </FilterProgressText>
      </FilterProgressContainer>
    ))}
  </>
);

export default FilterProgress;
