import colors from "@/utils/themes/colors";
import styled from "styled-components";

export const FilterComponentBox = styled.section`
  width: 330px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
`;

export const FilterComponentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${colors.gray};
  > h1 {
    color: ${colors.dark};
    font-size: 18px;
    font-weight: 500;
  }
  > span {
    color: ${colors.primary};
    font-size: 12px;
  }
`;

export const FilterComponentBody = styled.div`
width: 300px;
padding: 10px;
  > h1 {
    color: ${colors.dark};
    font-size: 14px;
    font-weight: 500;
    padding-bottom: 10px;
  }
`;
