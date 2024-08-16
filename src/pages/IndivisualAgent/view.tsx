import Spinner from "../../components/Spinner";
import useAgentWithStep from "../../hooks/useAgentWithStep";

export default function IndivisualAgent() {
  const { data } = useAgentWithStep();

  if (data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center justify-center flex flex-col items-center gap-3">
          <div className="loader mb-4"></div> <Spinner />
          <p className="text-lg font-semibold text-secondary">
            We are getting the data, please wait...
          </p>
        </div>
      </div>
    );
  }
  return <></>;
}
