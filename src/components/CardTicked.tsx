import React, { useContext, useState } from "react";
import { LuCalendarRange } from "react-icons/lu";
import { BoxTitle, Conatiner, Subtitle, ValueAll } from "./CardTicked.styled";
import colors from "@/utils/themes/colors";
import { FaRegUser } from "react-icons/fa";

const TicketCard = ({ ticketPrice }: any) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [ticketQuantity, setTicketQuantity] = useState(1);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTicketQuantity(Number(event.target.value));
  };

  const handleAddToCart = () => {
    const ticketToAdd = {
      ...ticketPrice,
      id: `${ticketPrice.id}`,
      quantity: ticketPrice?.price?.discount,
    };
    localStorage.setItem("cartTickets", JSON.stringify(ticketToAdd));
    alert(
      `Adicionado ao carrinho: ${ticketQuantity} ingressos para ${selectedDate} ao preço de R$${
        ticketPrice.price.full * ticketQuantity
      }`
    );
  };

  return (
    <Conatiner>
      <BoxTitle>
        <LuCalendarRange style={{ color: colors.primary, fontSize: "18px" }} />
        <Subtitle>
          Data do Ingresso
          <input
            type="date"
            id="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </Subtitle>
      </BoxTitle>
      <BoxTitle>
        <FaRegUser style={{ color: colors.primary, fontSize: "18px" }} />
        <Subtitle>
          Ingressos
          <input
            type="number"
            id="quantity"
            value={ticketQuantity}
            min="1"
            onChange={handleQuantityChange}
          />{" "}
        </Subtitle>
      </BoxTitle>

      <ValueAll>
        <Subtitle>Valor Total:</Subtitle>
        <span> R$ {ticketPrice?.price?.discount * ticketQuantity}</span>
      </ValueAll>
      <button
        onClick={handleAddToCart}
        style={{ backgroundColor: "blue", color: "white" }}
      >
        Comprar ingresso
      </button>
    </Conatiner>
  );
};

export default TicketCard;
