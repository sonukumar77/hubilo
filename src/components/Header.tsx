import React from "react";
import CrossIcon from "./icons/CrossIcon";
import MagnifyGlass from "./icons/MagnifyGlass";

interface HeaderProps {
  onClose: () => void;
  onSearch: (e: any) => void;
  searchValue: string;
}

const Header = ({ onClose, onSearch, searchValue }: HeaderProps) => {
  return (
    <header>
      <div className="flex justify-between items-center p-6 bg-secondary-50 rounded-tl-xl">
        <p>Add Speaker</p>
        <CrossIcon
          className="w-5 h-5 stroke-secondary-100 cursor-pointer"
          onClick={onClose}
        />
      </div>
      <div className="p-6">
        <div className="border-[1px] border-secondary-50 rounded-lg py-2 px-4 flex items-center">
          <MagnifyGlass
            className="fill-transparent stroke-primary-100 w-6 h-6"
            role="presentation"
            aria-hidden="true"
          />
          <input
            type="text"
            className="ml-2 outline-none border-none w-full"
            placeholder="Search..."
            onChange={onSearch}
            value={searchValue}
          />
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
