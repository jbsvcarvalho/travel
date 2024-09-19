import React from "react";
import { IconType } from "react-icons";
import {
  FilterListButton,
  IconWrapper,
  ListItemText,
} from "./filterList.styled";
import colors from "../../../utils/themes/colors";
interface ListItemProps {
  backgroundColor?: string;
  border?: string;
  color?: string;
  data: {
    id: number;
    icon: IconType;
    text: string;
    number: number;
    onClick?: () => void;
  }[];
}

const FilterList: React.FC<ListItemProps> = ({
  data = [],
  backgroundColor = "#fff",
  border = colors.gray,
  color = colors.gray,
  ...props
}) => {
  return (
    <>
      {data.map((item) => (
        <FilterListButton
          backgroundColor={backgroundColor}
          border={border}
          key={item.id}
          {...props}
        >
          <IconWrapper color={color}>
            <item.icon />
          </IconWrapper>
          <ListItemText color={color}>
            {item.text} ({item.number})
          </ListItemText>
        </FilterListButton>
      ))}
    </>
  );
};

export default FilterList;
