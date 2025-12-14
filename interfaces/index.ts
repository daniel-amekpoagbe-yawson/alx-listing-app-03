export interface CardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

// Define the address structure
interface Address {
  state: string;
  city: string;
  country: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
