import React from "react";

type Props = {
  title: string;
  date: string;
  institution: string;
};

const ExtraInfoBox = ({ title, date, institution }: Props) => {
  return (
    <div className="flex flex-col mt-4">
      <h3 className="font-faro-local text-xl">{institution}</h3>

      <p className="text-[#7C8A9C] font-faro-semibold text-xl">{title}</p>

      <p className="text-[#7C8A9C] font-faro-semibold mt-2 uppercase">{date}</p>
    </div>
  );
};

export default ExtraInfoBox;
