import styled from "styled-components";
import colors from "../../../utils/themes/colors";

export const FilterPriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`;
export const FilterPriceButton = styled.button<{
  backgroundColor: string;
  size: string;
  border: string;
}>`
  background-color: ${(props: any) => props.backgroundColor};
  width: ${(props: any) =>
    (props.size === "small" && "8rem") ||
    (props.size === "medium" && "10rem") ||
    (props.size === "large" && "14rem")};
  border: none;
  border-radius: ${(props: any) => props.border};
  display: flex;
  flex-direction: row;
  padding: 10px;
  color: ${colors.light};
  justify-content: space-between;
  font-size: ${(props: any) =>
    (props.size === "small" && "10px") ||
    (props.size === "medium" && "14px") ||
    (props.size === "large" && "16px")};
`;
