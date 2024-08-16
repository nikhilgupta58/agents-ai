import { useNavigate } from "react-router-dom";
import { IAgent } from "../hooks/useAgents";

interface AgentBoxProps {
  data: IAgent;
}

export default function AgentBox({ data }: AgentBoxProps) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-between items-center w-full md:w-[300px] h-[400px] bg-white rounded-lg border-2 border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out p-6">
      {/* Top Section with Logo */}
      <div className="flex flex-col items-center">
        <img
          src={data.logo}
          alt={`${data.name} Logo`}
          className="w-20 h-20 mb-4 rounded-full object-cover"
        />
        <h3 className="text-xl font-semibold text-primary-dark text-center">
          {data.title}
        </h3>
        <p className="text-sm text-gray-500 text-center">{data.name}</p>
      </div>

      {/* Middle Section with Description */}
      <div className="text-center mt-4">
        <p className="text-sm text-gray-700 line-clamp-3">{data.description}</p>
      </div>

      {/* Bottom Section with CTA */}
      <div className="mt-6">
        <button
          onClick={() => navigate(`/agent/${data.id}`)}
          className="bg-primary-light text-white font-semibold py-2 px-8 rounded-full shadow-md hover:bg-primary-dark transition duration-300"
        >
          Try it Now
        </button>
      </div>
    </div>
  );
}
