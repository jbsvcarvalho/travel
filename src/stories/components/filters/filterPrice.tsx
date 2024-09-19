import React from "react";
import { FilterPriceButton, FilterPriceContainer } from "./filterPrice.styled";
import { DataProps, FilterProps } from "@/types/components/filters.types";
import colors from "../../../utils/themes/colors";


const FilterPrice: React.FC<FilterProps> = ({
  size = "large",
  backgroundColor = `${colors.primary}`,
  data = [],
  border = "2px",
  ...props
}) => {
  return (
    <FilterPriceContainer>
      {data.map((item: DataProps) => (
        <FilterPriceButton
          border={border}
          backgroundColor={backgroundColor}
          size={size}
          key={item.id}
          {...props}
        >
          <span>
            {Number(item.labelOne).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          <span>-</span>
          <span>
            {Number(item.labelTwo).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </FilterPriceButton>
      ))}
    </FilterPriceContainer>
  );
};

export default FilterPrice;
