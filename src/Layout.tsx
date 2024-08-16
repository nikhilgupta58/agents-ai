import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div className="h-[100dvh] bg-primary flex flex-col w-[100dvw] z-10 overflow-y-auto text-secondary-dark">
      <div className="flex bg-secondary-dark flex-wrap py-4 rounded-b-md justify-between items-center w-full px-4 md:px-10">
        <p
          onClick={() => navigate("/agents")}
          className="text-[20px] md:text-[30px] cursor-pointer text-primary-dark py-2 rounded-[12px] permanent-marker"
        >
          AI AgentElite
        </p>
        <p
          onClick={() => navigate("/contactus")}
          className="text-primary-dark font-bold text-sm md:text-[18px] cursor-pointer"
        >
          Contact Us
        </p>
      </div>
      <div className="flex-grow overflow-y-auto flex flex-col gap-[48px]">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
