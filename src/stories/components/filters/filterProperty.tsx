import React from "react";
import { DataProps, FilterProps } from "@/types/components/filters.types";

import starts from "../../assets/Star.svg";
import Image from "next/image";
import { FilledStar, FilterPropertyButton } from "./filterProperty.styled";
import { FilterPriceContainer } from "./filterPrice.styled";
const FilterProperty: React.FC<FilterProps> = ({
  backgroundColor = "#ffffff",
  data = [],
  border = "2px",
  ...props
}) => {
  function renderStars(rating: any) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <FilledStar key={i}>
            <Image src={starts} alt="" width={30} height={30} />
          </FilledStar>
        );
      }
    }
    return stars;
  }

  return (
    <FilterPriceContainer>
      {data.map((item: DataProps) => (
        <FilterPropertyButton
          border={border}
          backgroundColor={backgroundColor}
          key={item.id}
          {...props}
        >
          <span>{renderStars(item?.labelOne)}</span>
          <span>({item.labelTwo})</span>
        </FilterPropertyButton>
      ))}
    </FilterPriceContainer>
  );
};

export default FilterProperty;
