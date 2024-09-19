export interface DataProps {
  labelOne: number;
  labelTwo: number;
  id: number;
}

export interface FilterProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  data: DataProps[];
  border?: string;
}

