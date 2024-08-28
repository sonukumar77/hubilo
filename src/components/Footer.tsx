import React from "react";
import Button from "./base/Button";

interface Props {
  selectedItems: string[];
}

const Footer = ({ selectedItems }: Props) => {
  const isDisable = selectedItems.length > 0;

  return (
    <section className="p-6 flex justify-between items-center flex-wrap border-t-[1px] bg-white border-secondary-50 sticky bottom-0 w-full ">
      <div className="flex gap-4">
        <Button
          text="Add"
          buttonStyle={`${
            selectedItems.length > 0
              ? "bg-primary-100 text-white"
              : "bg-secondary-50 text-secondary-100"
          }`}
          onClick={() => null}
          disable={isDisable}
        />
        <Button
          text="Cancel"
          buttonStyle="bg-primary-50 text-primary-100"
          onClick={() => null}
        />
      </div>
      <p className="text-primary-100 text-sm">Create a speaker</p>
    </section>
  );
};

export default React.memo(Footer);
