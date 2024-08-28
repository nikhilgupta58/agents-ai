import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import Spinner from "../../components/Spinner";
import useAgentWithStep from "../../hooks/useAgentWithStep";
import useDemo from "../../hooks/useDemo";

export default function Demo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data } = useAgentWithStep();
  const { mutate, data: demoData, isLoading } = useDemo();
  const name = searchParams.get("name");
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
    if (data?.demo_link) mutate(data?.demo_link, inputValue);
  };

  if (!data) {
    return <Loading />;
  }

  return (
    <>
      <Helmet>
        <title>AI Automation Agents Platform: {name}</title>
      </Helmet>
      <div className="max-w-5xl mx-auto py-12 px-6 md:px-12 md:w-[50dvw]">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-secondary-dark">
              {name}
            </h1>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-secondary-dark mb-6">
            Demo
          </h2>
          <div className="space-y-8">
            <div className="items-start md:items-center gap-2 flex-col md:flex-row flex">
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
            {isLoading ? (
              <div className="w-full py-4 items-center justify-center flex">
                <Spinner />
              </div>
            ) : (
              <></> // HERE
            )}
          </div>
        </div>
      </div>
    </>
  );
}
