import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

type Props = {
  title: string;
  description: string;
  listItem: string[];
  link: string;
};

const ArchiveCard = ({ title, description, listItem, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <span className="text-2xl text-textGreen">
            <FaRegFolder />
          </span>
          <span className="text-2xl hover:text-textGreen">
            <RxOpenInNewWindow />
          </span>
        </div>
        <div className="">
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
          <p className="text-sm mt-3">{description}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-evenly flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
