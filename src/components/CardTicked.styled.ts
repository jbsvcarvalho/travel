import colors from "@/utils/themes/colors";
import styled from "styled-components";

export const Conatiner = styled.main`
  padding: 20px;
  margin: 20px auto;
  background-color: white;
  border-radius: 8px;
`;

export const Subtitle = styled.h2`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${colors.dark};
  input {
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    display: none;
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  align-items: start;
  border-bottom: 1px solid ${colors.light};
`;

export const ValueAll = styled.div`
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  span {
    color: ${colors.primary};
    font-weight: 500;
    font-size: 18px;
  }
`;
