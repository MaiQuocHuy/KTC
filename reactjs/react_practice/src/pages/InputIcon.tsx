import React from "react";
import Input from "../components/ui/input";

const InputIcon = () => {
  return (
    <div className="flex flex-col gap-2 items-center bg-gray-100 p-5">
      <Input searchIcon={true} />
      <Input placeholder="Search...." searchIcon={true} />
      <Input text="TextField" font="bold" searchIcon={true} />
      <Input
        placeholder="Search in the web"
        outlineFunnelIcon={true}
        searchIcon={true}
      />
      <Input
        placeholder="Search crypto"
        outlineNodeIcon={true}
        searchIcon={true}
      />
      <Input placeholder="Phone number" outlinePhoneIcon={true} />
      <Input
        placeholder="Search in the web"
        infoCircleIcon={true}
        searchIcon={true}
      />
    </div>
  );
};

export default InputIcon;
