"use client";
import React, { useEffect, useState } from "react";
import { Division, End, Modal, Nav, Start } from "./navbar.styled";
import Image from "next/image";
import ButtonCart from "../buttons/buttonCart";
import { IoIosHelpCircleOutline } from "react-icons/io";

import { FaRegUser } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import colors from "@/utils/themes/colors";
import icoLogo from "../../../assets/Logo.png";
import icoCountry from "../../../assets/country.png";
import ModalInfo from "../modal/ModalInfo";
interface NavbarI {}

const NavBar: React.FC<NavbarI> = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [museumData, setMuseumData] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cartTickets"));
    setMuseumData(data);
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Nav>
        <Start>
          <Image src={icoLogo} alt="" />
        </Start>
        <End>
          <span>Cotação dólar hoje: R$5,53</span>
          <Image src={icoCountry} alt="" />
          <ButtonCart
            text={""}
            icon={IoIosHelpCircleOutline}
            size={"28px"}
            backgroundColor="none"
            color={colors.primary}
          />
          <Division />
          <ButtonCart
            text={"Entrar"}
            icon={FaRegUser}
            size={"medium"}
            backgroundColor="none"
            color={colors.primary}
          />
          <ButtonCart
            text={0}
            icon={PiShoppingCartSimpleFill}
            size={"medium"}
            onClick={openModal}
          />
        </End>
      </Nav>
      <Modal>
        <ModalInfo
          isOpen={isModalOpen}
          onClose={closeModal}
          data={museumData}
        />
      </Modal>
    </>
  );
};

export default NavBar;
