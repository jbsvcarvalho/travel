import FilterPrice from "@/stories/components/filters/filterPrice";
import FilterProperty from "@/stories/components/filters/filterProperty";
import FilterCheckboxGroup from "@/stories/components/filters/filterCheckboxGroup";
import FilterList from "@/stories/components/filters/filterList";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuHotel } from "react-icons/lu";
import FilterProgress from "@/stories/components/filters/filterProgress";
import {
  FilterComponentBody,
  FilterComponentBox,
  FilterComponentHeader,
} from "./filterComponent.styled";

export default function FilterComponent() {
  return (
    <FilterComponentBox>
      <FilterComponentHeader>
        <h1>Filtro</h1>
        <span>Limpar todos os filtros</span>
      </FilterComponentHeader>
      <FilterComponentBody>
        <h1>Preço</h1>
        <FilterPrice
          size="small"
          data={[
            { id: 1, labelOne: 10, labelTwo: 320 },
            { id: 1, labelOne: 10, labelTwo: 320 },
            { id: 1, labelOne: 10, labelTwo: 320 },
            { id: 1, labelOne: 10, labelTwo: 320 },
            { id: 1, labelOne: 10, labelTwo: 320 },
          ]}
        />
      </FilterComponentBody>
      <FilterComponentBody>
        <h1>Tipo de propriedade</h1>
        <FilterProperty
          size="small"
          data={[
            { id: 1, labelOne: 5, labelTwo: 145 },
            { id: 1, labelOne: 4, labelTwo: 145 },
            { id: 1, labelOne: 3, labelTwo: 145 },
            { id: 1, labelOne: 2, labelTwo: 145 },
            { id: 1, labelOne: 1, labelTwo: 145 },
          ]}
        />
      </FilterComponentBody>
      <FilterComponentBody>
        <h1>Comodidades</h1>
        <FilterCheckboxGroup
          items={[
            { id: "1", label: "Wi-Fi" },
            { id: "2", label: "Cozinha" },
            { id: "3", label: "Máquina de Lavar" },
            { id: "4", label: "Ar-condicionado" },
            { id: "5", label: "Secadora" },
          ]}
          checkedItems={[]}
          onChange={function (checkedItems: string[]): void {
            throw new Error("Function not implemented.");
          }}
        />
      </FilterComponentBody>
      <FilterComponentBody>
        <h1>Tipo de propriedade</h1>
        <FilterList
          data={[
            { id: 1, icon: IoHomeOutline, text: "casa", number: 12 },
            {
              id: 1,
              icon: HiOutlineBuildingOffice2,
              text: "Apartamentos",
              number: 12,
            },
            { id: 1, icon: LuHotel, text: "Hotel", number: 12 },
          ]}
        />
      </FilterComponentBody>
      <FilterComponentBody>
        <h1>Review Score</h1>
        <FilterProgress
          data={[
            { percentage: 80, label: "Excelente", number: 234 },
            { percentage: 60, label: "Muito bom", number: 234 },
            { percentage: 40, label: "Bom", number: 234 },
            { percentage: 20, label: "Ruim", number: 234 },
            { percentage: 9, label: "Pessímo", number: 234 },
          ]}
        />
      </FilterComponentBody>
    </FilterComponentBox>
  );
}
