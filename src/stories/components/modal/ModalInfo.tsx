import React from "react";
import styled from "styled-components";

const ModalBackdrop = styled.div`
  width: 200px;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  float: right;
  background: none;
  border: none;
  cursor: pointer;
`;

const ModalInfo = ({ isOpen, onClose, data }: any) => {
  if (!isOpen) return null;

  return (
    <ModalBackdrop onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>X</CloseButton>
        <img src={data.image} alt={data.name} style={{ width: "10%" }} />
        <h2>{data.name}</h2>
        <p>{data.location}</p>
        <p>{data.price.full}</p>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ModalInfo;
