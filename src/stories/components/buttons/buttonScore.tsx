import React from "react";
import colors from "../../../utils/themes/colors";
import { ButtonScoreBox, ButtonScoreReview, ButtonScoreTitle, ButtonScores } from "./buttonScores.styled";

interface ButtonScoreI {
  backgroundColor?: string;
  color?: string;
  number: number;
  score?: string;
  review?: number;
  onChange?: () => void;
}
const ButtonScore: React.FC<ButtonScoreI> = ({
  backgroundColor = colors.primary,
  color = "white",
  number,
  review,
  score,
}) => {
  return (
    <ButtonScores>
      <ButtonScoreBox backgroundColor={backgroundColor} color={color}>
        <span>{number}</span>
      </ButtonScoreBox>
      <ButtonScoreTitle>{score}</ButtonScoreTitle>
      <ButtonScoreReview>({review} Reviews)</ButtonScoreReview>
    </ButtonScores>
  );
};

export default ButtonScore;
