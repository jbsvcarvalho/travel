'use client'
import React from "react";
import CardBody from "@/stories/components/cards/cadsBody";
import PaginationCustom from "@/stories/components/pagination/pagination";
import { useTickets } from "@/provider/TicketContext";
import SearchInput from "@/components/input";
import FilterComponent from "@/components/filterComponent";
import { TicketsBoxEnd, TicketsContainer } from "./styled";

const Tickets: React.FC = () => {
  const { tickets, loading, totalItems, setCurrentPage, currentPage } =
    useTickets();

  const limit = 6;

  return (
    <TicketsContainer>
      <div>
        <SearchInput />
      </div>
      <TicketsBoxEnd>
        <div>
          <FilterComponent />
        </div>
        <div>
          {loading ? (
            <>
              <div>Loading...</div>
            </>
          ) : (
            tickets && tickets.length > 0 && <CardBody data={tickets} />
          )}

          <PaginationCustom
            itemsPerPage={limit}
            totalItems={totalItems}
            paginate={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      </TicketsBoxEnd>
    </TicketsContainer>
  );
};

export default Tickets;
