import { Helmet } from "react-helmet";
import ReactMarkdown from "react-markdown";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { IAgent } from "../../hooks/useAgents";
import useAgentWithStep from "../../hooks/useAgentWithStep";
import ContactUs from "../ContactUs/view";

export default function IndivisualAgent() {
  const { data }: { data: IAgent | null } = useAgentWithStep();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryValue = searchParams.get("name");
  if (!data) {
    return <Loading />;
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
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center">
              <h1 className="text-3xl md:text-4xl font-bold text-secondary-dark">
                {data.title}
              </h1>
              {data?.demo_link && (
                <button
                  onClick={() =>
                    navigate(`demo?name=${queryValue}&summary_count=10`)
                  }
                  className="px-2 py-1 w-fit rounded-md bg-secondary-dark text-primary-dark hover:brightness-110 transition-all"
                >
                  Try Now 🔗
                </button>
              )}
            </div>
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
            Steps
          </h2>
          <div className="space-y-8">
            {data.steps?.map((step, index) => (
              <div
                key={step.id}
                className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-primary-light"
              >
                <h3 className="text-xl font-bold text-primary-dark">
                  Step {index + 1}
                </h3>
                <ReactMarkdown className="prose prose-lg text-gray-700 mt-4">
                  {step.short_desc}
                </ReactMarkdown>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => navigate(-1)}
            className="bg-primary-light text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-primary-dark transition duration-300"
          >
            Back to Agents
          </button>
        </div>
        <ContactUs className="md:p-0 p-0 min-h-0 mt-0" agentName={data?.name} />
      </div>
    </>
  );
}
