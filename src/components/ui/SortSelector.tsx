import { ChevronDown } from "lucide-react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@/components/ui/button";

interface Props {
  onSelectedOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectedOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );
  return (
    <MenuRoot>
      <MenuTrigger asChild marginY={2}>
        <Button variant="subtle">
          Order by: {currentSortOrder?.label || "Relevance"}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </MenuTrigger>
      <MenuContent>
        {sortOrders.map((order) => (
          <MenuItem
            onClick={() => onSelectedOrder(order.value)}
            key={order.value}
            value={order.value}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
