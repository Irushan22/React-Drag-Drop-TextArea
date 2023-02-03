import React, { useEffect, useRef, useState } from "react";
import { onDropItem, onChangeEditableDivElement } from "../../utility/helper";
import "./style.css";

type DroppableAreaProps = {
  replaceWithActualValFunc: Function;
  dropperbleItems: Object;
};

const DroppableArea: React.FC<DroppableAreaProps> = ({
  replaceWithActualValFunc,
  dropperbleItems,
}) => {

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    previewText();
    return () => {};
  }, [text]);

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const previewText = () => {
    const newString = onChangeEditableDivElement(text, dropperbleItems);
    replaceWithActualValFunc(newString);
  };

  const onDrop = (e: any) => {
    let dropedItem = e.dataTransfer.getData("item_display_value");
    setText(text.concat(dropedItem));
    onDropItem(e, e.target.id);
  };

  const handleChange = (e: any) => {
    setText(e.target.textContent);
  };


  return (
    <div
      id="droppable-textarea-id"
      className="droppable-textarea"
      contentEditable="true"
      onDragOver={onDragOver}
      onDrop={onDrop}
      onInput={handleChange}
      ref={inputRef}
    ></div>
  );
};

export default DroppableArea;
