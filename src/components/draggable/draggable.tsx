import React from "react";
import './style.css'

type DraggableProps = {
  value: string;
};

const Draggable: React.FC<DraggableProps> = ({ value }) => {

  //onDragStart function for start drag
  const onDragStart = (e: any) => {
    e.dataTransfer.setData("item_display_value", value);
  };

  return (
    <div
      id="drag-item-id"
      className="drag-item-style"
      draggable
      onDragStart={onDragStart}
    >
      {value}
    </div>
  );
};

export default Draggable;
