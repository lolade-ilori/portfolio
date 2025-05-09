import React from "react";

interface Props {
  pillName: string;
  zIndex?: string;
  leftPosition?: string;
  rightPosition?: string;
  topPosition?: string;
  bottomPosition?: string;
}

const Pills = ({
  pillName,
  zIndex,
  leftPosition,
  rightPosition,
  topPosition,
  bottomPosition,
}: Props) => {
  return (
    <div
      className={`bg-[#0069FB] rounded-md py-2 px-5 flex items-center justify-center absolute ${zIndex} ${leftPosition} ${rightPosition} ${topPosition} ${bottomPosition} `}
    >
      <p className="captalize font-faro-regular font-light">{pillName}</p>
    </div>
  );
};

export default Pills;
