import { useTickets } from "@/provider/TicketContext";
import InputSearch from "@/stories/components/input/inputSearch";
import React, { useState, useEffect } from "react";
import { SlLocationPin } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import colors from "@/utils/themes/colors";
import { InputComponent } from "./input.styled";

const SearchInput = () => {
  const { setSearchTerm, tickets } = useTickets();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 500);

    return () => clearTimeout(handler);
  }, [inputValue, setSearchTerm, tickets]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <InputComponent onSubmit={handleSearchSubmit}>
    
      <InputSearch
        startIcon={<SlLocationPin style={{color: "blue"}} />}
        endIcon={<CiSearch onClick={() => setSearchTerm("")}/>}
        inputValue={inputValue}
        onChange={handleSearchChange}
        placeholder="Busque por atração"

      />
    </InputComponent>
  );
};

export default SearchInput;
