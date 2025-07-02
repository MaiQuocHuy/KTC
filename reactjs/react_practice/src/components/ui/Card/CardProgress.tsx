import React from "react";
import { AiOutlineEllipsis } from "react-icons/ai";

type Props = {
  tags: string[];
  title: string;
  subtitle: string;
  progress: number; // 0 - 100
};

const CardProgress = ({ tags, title, subtitle, progress }: Props) => {
  return (
    <div className="bg-white shadow-md rounded-lg w-xs max-w-md px-3 py-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-bold bg-gray-200 px-2 py-1 rounded-lg text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
          <AiOutlineEllipsis className="text-black text-2xl" />
        </div>
        <div>
          <h3 className="font-bold text-sm">{title}</h3>
          <span className="text-xs text-gray-500">{subtitle}</span>
        </div>
        <div className="flex items-center justify-between mt-2 gap-6">
          <div className="bg-gray-300 h-2 rounded-lg w-full">
            <div
              style={{ width: `${progress}%` }}
              className="bg-green-400 h-full rounded-lg"
            />
          </div>
          <span className="block font-bold text-xs">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default CardProgress;
