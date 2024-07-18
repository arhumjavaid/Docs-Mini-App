// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  
  const ref = useRef(null)

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium.",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, enim.",
      fileSize: "0.8mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium.amet consectetur adipisicing . ",
      fileSize: "0.4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue" },
    },
  ];

  return (
    <>
      <div ref={ref} className="fixed top-0 w-full h-screen z-[3] flex gap-10 flex-wrap p-5 ">
        {data.map((item, index) => (
          <Card key={index} data={item} reference={ref}/>
    
        ))}
      </div>
    </>
  );
};

export default Foreground;
