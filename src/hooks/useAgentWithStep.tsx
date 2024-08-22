import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { IAgent, Step } from "./useAgents";

const useAgentWithStep = () => {
  const { id } = useParams<{ id: string }>();

  async function getAgent(agentId: string) {
    // Fetch the specific agent by ID
    const { data: agent, error: agentError } = await supabase
      .from("agents")
      .select("*")
      .eq("id", agentId)
      .single(); // Fetch a single row

    if (agentError) {
      console.error("Error fetching agent:", agentError);
      return { agent: null, steps: null, error: agentError.message };
    }

    // Fetch all steps related to this agent
    const { data: steps, error: stepsError } = await supabase
      .from("steps")
      .select("*")
      .eq("project_id", agentId);

    if (stepsError) {
      console.error("Error fetching steps:", stepsError);
      return { agent, steps: null, error: stepsError.message };
    }

    // Sort the steps by step_order
    const sortedSteps =
      steps?.sort((a: Step, b: Step) => a.step_order - b.step_order) || [];

    return { data: { ...agent, steps: sortedSteps }, error: null };
  }

  const [agent, setAgent] = useState<IAgent | null>(null);

  useEffect(() => {
    if (id) {
      getAgent(id).then((result: any) => setAgent(result?.data));
    }
  }, [id]);

  return { data: agent };
};

export default useAgentWithStep;
