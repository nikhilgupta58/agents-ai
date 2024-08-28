import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import Spinner from "../../components/Spinner";
import { IAgent } from "../../hooks/useAgents";
import useAgentWithStep from "../../hooks/useAgentWithStep";
import ContactUs from "../ContactUs/view";

export default function Demo() {
  const { data }: { data: IAgent | null } = useAgentWithStep();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const queryValue = searchParams.get("query");
    if (queryValue) {
      setInputValue(queryValue);
    }
  }, [searchParams]);

  const handleSubmit = () => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("query", inputValue);
    setSearchParams(newParams);
  };

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center justify-center flex flex-col items-center gap-3">
          <Spinner />
          <p className="text-lg font-semibold text-secondary">
            We are getting the data, please wait...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>AI Automation Agents Platform: {data?.title}</title>
        <meta name="description" content={data?.description} />
      </Helmet>
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={data.logo}
            alt={data.title}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
          />
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary-dark">
              {data.title}
            </h1>
            <p className="text-lg text-secondary-light mt-2">{data.name}</p>
            <h2 className="text-md text-secondary-light mt-4">
              {data.description}
            </h2>
            <div className="mt-4">
              <span className="text-sm font-medium text-tertiary-dark">
                Categories:{" "}
              </span>
              <span className="text-sm text-secondary-light">
                {data.categories.join(", ")}
              </span>
            </div>
            <div className="mt-2">
              <span className="text-sm font-medium text-tertiary-dark">
                Tools Used:{" "}
              </span>
              <span className="text-sm text-secondary-light">
                {data.tools_used.join(", ")}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-secondary-dark mb-6">
            Demo
          </h2>
          <div className="space-y-8">
            <input
              type="text"
              placeholder="Enter your text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-3 border border-primary-light text-black rounded-md focus:outline-none focus:border-primary-dark"
            />
            <button
              onClick={handleSubmit}
              className="px-6 py-3 border-[1px] bg-primary text-secondary-dark font-semibold rounded-md hover:bg-primary-dark transition-colors"
            >
              Submit
            </button>
          </div>
        </div>

        <ContactUs className="md:p-0 p-0 min-h-0 mt-0" agentName={data?.name} />
      </div>
    </>
  );
}
