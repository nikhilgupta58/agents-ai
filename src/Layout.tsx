import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  return (
    <div className="h-[100dvh] flex flex-col w-[100dvw] z-10 overflow-y-auto text-black">
      <div className="flex flex-wrap h-[70px] py-2 justify-between items-center w-full px-4 md:px-10">
        <p
          onClick={() => navigate("/agents")}
          className="text-[20px] bg-[#6200EA] cursor-pointer text-white px-4 py-2 rounded-[12px] permanent-marker"
        >
          AI AgentElite
        </p>
        <p
          onClick={() => navigate("/contactus")}
          className="text-[#6200EA] font-bold text-md md:text-[18px] cursor-pointer"
        >
          Contact Us
        </p>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
    </div>
  );
}
