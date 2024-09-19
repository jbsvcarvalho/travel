"use client";
import ticketService from "@/services/ticket.service";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BoxTitle,
  ColumLeft,
  ColumRight,
  Column,
  Container,
  Subtitle,
  Title,
} from "../styled";
import { SlLocationPin } from "react-icons/sl";
import iconNatural from "../../../../assets/natural.png";
import iconLocation from "../../../../assets/location.png";
import Image from "next/image";
import ButtonCuston from "@/stories/components/buttons/buttonCustom";
import { IoArrowForward, IoWifi } from "react-icons/io5";
import ButtonScore from "@/stories/components/buttons/buttonScore";
import { HiOutlineTicket } from "react-icons/hi2";
import { VscCoffee } from "react-icons/vsc";
import { MdOutlineHouse } from "react-icons/md";
import TicketCard from "@/components/CardTicked";
import { PiArrowBendUpLeft } from "react-icons/pi";

const TicketDetails = () => {
  const router = useParams();
  const { ticketId } = router;
  const [userId, setUserId] = useState<any>([]);

  async function fetchId(params: number | any) {
    const { data } = await ticketService.getTicketById(params);
    console.log(data);
    setUserId(data);
  }
  useEffect(() => {
    fetchId(ticketId);
  });

  return (
    <Container>
      <BoxTitle>
        <PiArrowBendUpLeft style={{ fontSize: "28px" }} />
        <div>
          <Title>{userId.name}</Title>
          <Subtitle>
            <SlLocationPin style={{ fontSize: "22px", color: "blue" }} />
            <h1>{userId.location}</h1>
          </Subtitle>
        </div>
      </BoxTitle>
      <Image src={iconNatural} alt="" quality={100} />
      <Column>
        <ColumLeft>
          <ButtonScore
            number={userId.rating?.value}
            review={userId.rating?.reviewsCount}
            score="Excellent"
          />
          <Subtitle>
            <HiOutlineTicket /> Passagem Aérea <IoWifi /> Wi-Fi <VscCoffee />{" "}
            Café de manhã <MdOutlineHouse />
            Quarto
          </Subtitle>
          <Title>Sobre o Ingresso selecionado:</Title>
          {userId.description}

          <Title>Localização</Title>

          <Image src={iconLocation} alt="" quality={100} />
        </ColumLeft>
        <ColumRight>
            <TicketCard ticketPrice={userId}/>
        </ColumRight>
      </Column>
    </Container>
  );
};

export default TicketDetails;
