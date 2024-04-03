import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (items: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  let items_old = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
              console.log(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
