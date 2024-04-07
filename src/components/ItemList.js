import React from "react";

// function ItemList() {
//   return (
//     <div>ItemList</div>
//   )
// }
const ItemList = ({ items }) => {
  console.log(items, "items");
  return (
    <div>
      {items.map((item) => (
        <div>
          <span>{item.card.info.name}</span> <span>{item.card.info.price}</span>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
