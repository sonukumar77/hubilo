import React from "react";
import Avatar from "./base/Avatar";
import VerticalDivider from "./base/VerticalDivider";
import EditIcon from "./icons/EditIcon";

interface SpeakerCardProps {
  selectedItems: string[];
  onSelect: (id: string) => void;
  id: string;
  name: string;
  designation: string;
  organisation: string;
}

const SpeakerCard = ({
  selectedItems,
  onSelect,
  id,
  name,
  designation,
  organisation,
}: SpeakerCardProps) => {
  const isShowHighLight = selectedItems.includes(id);

  return (
    <div
      className={`w-full flex gap-4 border-[1px] rounded-lg p-4 ${
        isShowHighLight ? "border-success-100" : "border-secondary-50"
      }`}
      onClick={() => onSelect(id)}
    >
      <div className="w-16 h-16">
        <Avatar />
      </div>
      <div className="w-full space-y-2">
        <input
          type="checkbox"
          className="float-end accent-success-100"
          checked={isShowHighLight}
          readOnly
        />
        <p>{name}</p>
        <div className="flex flex-wrap text-xs text-secondary-100 gap-2">
          <span>{designation}</span>
          <VerticalDivider />
          <span>{organisation}</span>
        </div>
        <div className="flex space-x-2">
          <EditIcon
            svgProps={{ width: 16, height: 16 }}
            pathProps={{ fill: "#E4875D" }}
          />
          <span className="text-primary-100 text-xs">Edit Speaker</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SpeakerCard);
