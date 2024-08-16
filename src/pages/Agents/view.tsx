import AgentBox from "../../components/AgentBox";
import Testimonial from "../../components/Testimonial";
import useAgents from "../../hooks/useAgents";

export default function Agents() {
  const { data } = useAgents();
  const isFeaturedData = data?.filter((row) => row.is_feature);
  return (
    <div className="w-full pt-10  pb-4 md:pt-20  md:pb-5  flex flex-col gap-[58px]">
      <div className="w-full px-5 md:px-10 justify-center items-center flex flex-col gap-4 ">
        <p className="text-[35px] font-semibold text-secondary md:text-[52px] tracking-[4px] text-center">
          AI Automation Agents Platform
        </p>
        <p className="text-[17px] md:max-w-[64%] font-semibold text-secondary-light md:text-[18px] tracking-[0px] text-center">
          Revolutionize your workflow with our cutting-edge AI agents. Each
          specialized agent is designed to streamline specific tasks, boost
          productivity, and unlock new possibilities in automation.
        </p>
      </div>
      {isFeaturedData.length > 0 && (
        <div className="flex px-5 md:px-10 flex-col justify-center items-center w-full gap-[48px]">
          <p className="text-[32px] font-bold text-tertiary">Featured Agents</p>
          <div className="flex flex-wrap w-full gap-[40px] justify-center items-center">
            {isFeaturedData.map((row, id) => {
              return <AgentBox data={row} key={id} />;
            })}
          </div>
        </div>
      )}
      <div className="flex flex-col py-10 px-5 md:px-10 justify-center items-center w-full gap-[48px] bg-primary-dark">
        <p className="text-[32px] font-bold text-tertiary">Our Other Agents</p>
        <div className="grid gap-[40px] w-full md:w-auto justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {data.map((row, id) => {
            return <AgentBox data={row} key={id} />;
          })}
        </div>
      </div>
      <Testimonial />
    </div>
  );
}
