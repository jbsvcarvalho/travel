"use client";
import React from "react";
import { TicketsProvider } from "@/provider/TicketContext";
import Tickets from "./(pages)/tickets/page";


const Home = () => {
  return (
    <TicketsProvider>
        <Tickets />
    </TicketsProvider>
  );
};

export default Home;
