import React from "react";
import Draggable from "../draggable/draggable";
import "./style.css";

type DraggableAreaProps = {
  dropperbleItems: any;
};

const DraggableArea: React.FC<DraggableAreaProps> = ({ dropperbleItems }) => {
  return (
    <div className="draggable-area-wrapper">
      {dropperbleItems.map((item:any, index: any) => (
        <Draggable key={index} value={item.displayValue} />
      ))}
    </div>
  );
};

export default DraggableArea;
