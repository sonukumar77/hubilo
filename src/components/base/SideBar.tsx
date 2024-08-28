import { ReactNode, ReactPortal } from "react";

interface SideBarProps {
  children: ReactNode;
  visible: boolean;
}
const SideBar = ({ children, visible }: SideBarProps) => {
  return (
    <div className="bg-secondary-100 fixed h-screen w-screen top-0 right-0">
      <div
        className="lg:w-[40%] md:w-[40%] w-screen bg-white rounded-xl fixed right-0 h-screen"
        style={{ animation: visible ? "slideOn 1s 1" : "slideOff 1s 1" }}
      >
        {children}
      </div>
    </div>
  );
};

export default SideBar;
