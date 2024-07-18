/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1 }}
        dragElastic={0.2}
        dragTransition={{ bounceStiffness: 100, bounceDamping: 50 }}
        className=" relative flex-shrink-0 w-60 h-[300px] bg-zinc-900/90 rounded-[45px] text-white px-7 py-10 overflow-hidden"
      >
        <FaRegFileAlt />
        <p className="text-sm leading-tight mt-5">{data.desc}</p>
        <div className="footer absolute bottom-0 left-0 w-full">
          <div className="flex items-center justify-between py-3 px-8 mb-2">
            <h5>{data.fileSize}</h5>
            <span className="w-7 h-7 bg-zinc-700 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoClose />
              ) : (
                <LuDownload size=".85em" color="#fff" />
              )}
            </span>
          </div>
          {data.tag.isOpen && (
            <div
              className={`tag ${
                data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
              } w-full py-4 flex items-center justify-center`}
            >
              <h3 className="text-sm">{data.tag.tagTitle}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Card;
