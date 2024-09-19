import React from "react";
import { IconType } from "react-icons";

import colors from "../../../utils/themes/colors";
import {
  ButtonCustoms,
  IconWrapper,
  ListItemText,
} from "./buttonCustom.styled";
interface ListItemProps {
  backgroundColor?: string;
  border?: string;
  color?: string;
  icon?: IconType;
  size?: string;
  text: string | number;
  onClick?: () => void;
}

const ButtonCuston: React.FC<ListItemProps> = ({
  backgroundColor = colors.primary,
  border = "2px",
  color = "white",
  size = "medium",
  text,
  icon: Icon,
  ...props
}) => {
  return (
    <>
      <ButtonCustoms
        backgroundColor={backgroundColor}
        size={size}
        border={border}
        {...props}
      >
        <ListItemText color={color}>{text}</ListItemText>
        {Icon && (
          <IconWrapper color={color}>
            <Icon />
          </IconWrapper>
        )}
      </ButtonCustoms>
    </>
  );
};

export default ButtonCuston;
