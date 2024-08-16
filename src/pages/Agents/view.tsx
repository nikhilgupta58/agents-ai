import AgentBox from "../../AgentBox";

export default function Agents() {
  return (
    <div className="w-full pt-10 px-5 pb-4 md:pt-20 md:px-10 md:pb-5  flex flex-col gap-[58px]">
      <div className="w-full justify-center items-center flex flex-col gap-4 ">
        <p className="text-[35px] font-semibold text-gray-800 md:text-[52px] tracking-[4px] text-center">
          AI Automation Agents Platform
        </p>
        <p className="text-[17px] md:max-w-[64%] font-semibold text-gray-600 md:text-[18px] tracking-[0px] text-center">
          Revolutionize your workflow with our cutting-edge AI agents. Each
          specialized agent is designed to streamline specific tasks, boost
          productivity, and unlock new possibilities in automation.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-[48px]">
        <p className="text-[28px]">Featured Agents</p>
        <div className="flex flex-wrap gap-[40px] justify-center items-center">
          {Array.from({ length: 3 }, (_, id) => (
            <AgentBox key={id} />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-[48px] px-[20px]">
        <p className="text-[28px]">Our Other Agents</p>
        <div className="flex flex-wrap gap-[40px] justify-center items-center">
          {Array.from({ length: 10 }, (_, id) => (
            <AgentBox key={id} />
          ))}
        </div>
      </div>
    </div>
  );
}
