export default function AgentBox() {
  return (
    <div className="flex flex-col justify-between items-center w-full md:w-[280px] h-[350px] bg-white rounded-lg border-2 border-gray-300 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out p-4">
      {/* Top Section with Icon */}
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 mb-4 bg-gradient-to-r from-primary-light to-tertiary rounded-full flex justify-center items-center">
          {/* Placeholder for Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-primary-dark"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 10l4.553-4.553a1.5 1.5 0 011.908-.108l.141.11a1.5 1.5 0 01.11 1.907l-.11.142L15 10zM4 20.5v-4.2a4.5 4.5 0 012.765-4.141L7 12.5l3-3m4-4l3 3m-3-3L7 12.5m3-3v-2m2-2l-3 3m-2-1l3 3"
            />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-primary-dark">
          Company Research Agent
        </h3>
        <p className="text-sm text-gray-500">By @dharmesh</p>
      </div>

      {/* Middle Section with Info */}
      <div className="text-center">
        <p className="text-sm text-gray-700">1 credit per execution</p>
        <p className="text-sm text-gray-700">25.2K executions</p>
      </div>

      {/* Bottom Section with Button */}
      <div>
        <button className="bg-primary-light text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-primary-dark transition duration-300">
          Use
        </button>
      </div>
    </div>
  );
}
