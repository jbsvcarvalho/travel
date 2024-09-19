import colors from "@/utils/themes/colors";
import styled from "styled-components";

export const TicketsContainer = styled.main`
  background-color: ${colors.light};
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TicketsBoxEnd = styled.div`
  padding-top: 30px;
  display: flex;
  place-content: center;
  gap: 2rem;
  flex-direction: row;
`;

export const BoxTitle = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 500;
  color: ${colors.dark};
  padding-bottom: 8px;
`;
export const Subtitle = styled.h2`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
  color: ${colors.blueDark};
`;
export const Container = styled.main`
  padding: 30px;
  background-color:  ${colors.light};
`;

export const Column = styled.section`
  display: flex;
  gap: 2rem;
`;
export const ColumLeft = styled.section`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 2rem;
`;
export const ColumRight = styled.section`
  display: flex;
  align-items: flex-start;
`;
