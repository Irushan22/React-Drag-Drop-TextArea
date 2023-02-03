import { useState } from "react";
import DraggableArea from "./components/draggabelArea/draggableArea";
import DroppableArea from "./components/droppableArea/droppableArea";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  const [previewText, setPreviewText] = useState("");

  const example = [
    {
      displayValue: "rate",
      actualValue: 80,
    },
    {
      displayValue: "intrest",
      actualValue: 100,
    },
    {
      displayValue: "eligiblity",
      actualValue: "yes",
    },
    {
      displayValue: "expirDate",
      actualValue: "2012.01.03",
    },
  ];

  const replaceWithActualValues = (text: string) => {
    setPreviewText(text);
  };

  return (
    <>
      <p>previewText:{previewText}</p>
      <DroppableArea replaceWithActualValFunc={replaceWithActualValues} dropperbleItems={example} />
      <DraggableArea dropperbleItems={example} />
    </>
  );
}

export default App;
