import React from "react";

import {
  AiFillPhone,
  AiOutlineFunnelPlot,
  AiOutlineNodeExpand,
  AiOutlineSearch,
  AiTwotoneInfoCircle,
} from "react-icons/ai";
import Input from "../components/ui/input";

const InputIcon = () => {
  return (
    <div className="flex flex-col gap-2 items-center bg-gray-100 p-5">
      <Input iconLeft={<AiOutlineSearch className="text-xl" />} />
      <Input
        placeholder="Search...."
        iconLeft={<AiOutlineSearch className="text-xl" />}
      />
      <Input
        value="TextField"
        fontWeight="bold"
        iconLeft={<AiOutlineSearch className="text-xl" />}
      />
      <Input
        placeholder="Search in the web"
        iconLeft={<AiOutlineSearch className="text-xl" />}
        iconRight={<AiOutlineFunnelPlot className="text-2xl p-1 rounded-lg" />}
      />
      <Input
        placeholder="Search crypto"
        iconLeft={<AiOutlineSearch className="text-xl" />}
        iconRight={<AiOutlineNodeExpand className="text-2xl p-1 rounded-lg" />}
      />
      <Input
        placeholder="Phone number"
        iconRight={
          <AiFillPhone className="text-2xl p-1 bg-green-200 rounded-lg" />
        }
      />
      <Input
        placeholder="Search in the web"
        iconLeft={<AiOutlineSearch className="text-xl" />}
        iconRight={
          <AiTwotoneInfoCircle className="text-2xl p-1 bg-yellow-200 rounded-full" />
        }
      />
    </div>
  );
};

export default InputIcon;
