import styled from "styled-components";
import colors from "../../../utils/themes/colors";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid ${colors.gray};
`;
export const Start = styled.div`
  width: 13%;
`;
export const End = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2%;
  align-items: center;
  height: 20%;
`;
export const Division = styled.div`
  border-left: 1px solid ${colors.gray};
  height: 25px;
`;
export const Modal = styled.div`
  border-left: 1px solid ${colors.gray};
  height: 25px;
  position: absolute;
  top: 10%;
  right: 25%;
`;