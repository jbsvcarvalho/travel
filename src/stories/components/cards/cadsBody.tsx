import React from "react";
import {
  BoxCenter,
  BoxEnd,
  BoxTitle,
  CardBodyContainer,
  Container,
  DiscountPrice,
  Images,
  StyledBy,
  StyledDiscountPrice,
  StyledFullPrice,
  StyledPriceContainer,
  Subtitle,
  Title,
} from "./cardBody.styled";
import { SlLocationPin } from "react-icons/sl";
import ButtonCuston from "../buttons/buttonCustom";
import ButtonScore from "../buttons/buttonScore";
import { IoArrowForward } from "react-icons/io5";
import { useRouter } from "next/navigation";


interface Price {
  full: number;
  discount: number;
}

interface Rating {
  reviewsCount: number;
  value: number;
}

interface Destination {
  id: string;
  name: string;
  location: string;
  image: string;
  description: string;
  price: Price;
  rating: Rating;
  createdAt: string;
  updatedAt: string;
}

interface DestinationData {
  data: Destination[];
}

const CardBody: React.FC<DestinationData> = ({ data }) => {
  const router = useRouter();
  return (
    <Container>
      {data.map((item: Destination) => (
        <CardBodyContainer key={item.id}>
          <Images bg={item.image} />
          <BoxCenter>
            <BoxTitle>
              <Title>{item.name}</Title>
              <Subtitle>
                <SlLocationPin style={{ fontSize: "24px", color: "blue" }} />
                <h1>{item.location}</h1>
              </Subtitle>
            </BoxTitle>

            <ButtonScore
              number={item.rating.value}
              review={item.rating.reviewsCount}
              score="Excellent"
            />
          </BoxCenter>

          <BoxEnd>
            <StyledPriceContainer>
              <StyledFullPrice>
                de
                {Number(item.price.full).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
                por
              </StyledFullPrice>
              <DiscountPrice>
                <StyledBy>R$</StyledBy>
                <StyledDiscountPrice>
                  {Number(item.price.discount).toLocaleString()}
                </StyledDiscountPrice>
              </DiscountPrice>
            </StyledPriceContainer>
            <ButtonCuston
              text={"Saber mais"}
              size="medium"
              icon={IoArrowForward}
              onClick={() => router.push(`/tickets/${item.id}`)}
            />
          </BoxEnd>
        </CardBodyContainer>
      ))}
    </Container>
  );
};

export default CardBody;
