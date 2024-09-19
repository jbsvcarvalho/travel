import React from 'react';
import { CheckboxContainer, CheckboxInput, CheckboxLabel } from './filterCheckboxGroup.styles';

interface CheckboxItem {
    id: string;
    label: string;
  }
  
  interface CheckboxGroupProps {
    items: CheckboxItem[];
    checkedItems: string[];
    onChange: (checkedItems: string[]) => void;
  }
  
const FilterCheckboxGroup: React.FC<CheckboxGroupProps> = ({
    items,
    checkedItems,
    onChange,
  }) => {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const itemId = event.target.value;
      let updatedCheckedItems: string[];
  
      if (event.target.checked) {
        updatedCheckedItems = [...checkedItems, itemId];
      } else {
        updatedCheckedItems = checkedItems.filter((id) => id !== itemId);
      }
  
      onChange(updatedCheckedItems);
    };
  
    return (
      <>
        {items.map((item) => (
          <CheckboxContainer key={item.id}>
            <CheckboxInput
              type="checkbox"
              id={item.id}
              value={item.id}
              checked={checkedItems.includes(item.id)}
              onChange={handleCheckboxChange}
            />
            <CheckboxLabel htmlFor={item.id}>{item.label}</CheckboxLabel>
          </CheckboxContainer>
        ))}
      </>
    );
  };
  
  export default FilterCheckboxGroup;
  